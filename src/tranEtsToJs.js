import { input_unit } from "../main.js";
import * as fs from "fs"; 
import * as path from "path"; 
import * as childProcess from "child_process";

async function processDirectory(dirPath) {
  try {
    const entries = await fs.promises.readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        await processDirectory(fullPath);
      } else if (entry.isFile() && path.extname(fullPath) === '.ets') {
        // 构建.ts与.js文件的新路径
        const tsFilePath = fullPath.slice(0, -4) + '.ts';
        const jsFilePath = fullPath.slice(0, -4) + '.js';

        // 将.ets文件内容复制到.ts文件
        try {
          let data = await fs.promises.readFile(fullPath, 'utf8');
          await fs.promises.writeFile(tsFilePath, data, 'utf8');

          console.log(`File ${fullPath} content copied to ${tsFilePath}`);

          // 使用TypeScript编译器将.ts文件编译为.js文件
          if(input_unit.ets_to_js) {
            const tscCommand = `tsc ${tsFilePath}`;
            childProcess.exec(tscCommand, (compileError, stdout, stderr) => {
              if (compileError) {
                console.error(`Failed to compile TypeScript file: ${tsFilePath}: ${compileError}`);
              } else {
                console.log(`File ${tsFilePath} has been compiled to ${jsFilePath}`);
              }
            });
          }
        } catch (readOrWriteError) {
          console.error(`Failed to process file: ${fullPath}: ${readOrWriteError}`);
        }
      }
    }
  } catch (listError) {
    console.error(`Failed to list directory: ${dirPath}: ${listError}`);
  }
}

export async function tranEtsToJs(in_directory) {
  const directoryPath = in_directory;
  if(input_unit.ets_to_ts) {
    await processDirectory(directoryPath);
  }
}



// export function tranEtsToJs(_in_file) {
//   const directoryPath = _in_file; 
//   fs.readdir(directoryPath, (err, files) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
  
//     files.forEach((file) => {
//       const filePath = path.join(directoryPath, file);
  
//       // 检查文件是否为.ets文件
//       if (path.extname(filePath) === '.ets') {
//         // 构建.ts与.js文件的新路径
//         const tsFilePath = filePath.slice(0, -4) + '.ts';
//         const jsFilePath = filePath.slice(0, -4) + '.js';
  
//         // 将.ets文件内容复制到.ts文件
//         fs.readFile(filePath, 'utf8', (readError, data) => {
//           if (readError) {
//             console.error(`Failed to read file: ${filePath}: ${readError}`);
//           } else {
//             fs.writeFile(tsFilePath, data, 'utf8', (writeError) => {
//               if (writeError) {
//                 console.error(`Failed to write .ts file: ${tsFilePath}: ${writeError}`);
//               } else {
//                 console.log(`File ${filePath} content copied to ${tsFilePath}`);
  
//                 // 使用TypeScript编译器将.ts文件编译为.js文件
//                 const tscCommand = `tsc ${tsFilePath}`;
//                 childProcess.exec(tscCommand, (compileError, stdout, stderr) => {
//                   if (compileError) {
//                     console.error(`Failed to compile TypeScript file: ${tsFilePath}: ${compileError}`);
//                   } else {
//                     console.log(`File ${tsFilePath} has been compiled to ${jsFilePath}`);
//                   }
//                 });
//               }
//             });
//           }
//         });
//       }
//     });
//   });
  
// }
