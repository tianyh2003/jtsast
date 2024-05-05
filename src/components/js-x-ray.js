import { runASTAnalysis } from "@nodesecure/js-x-ray";
import * as util from "util";
import * as fs from "fs";
import { output_unit } from "../../main.js";
import { glob } from "glob"; 

export async function detecting_malicious_patterns(input_file) {
  // 匹配当前文件夹下（包括子文件夹下）所有以.ts结尾的文件  
  const tsfiles = await glob(input_file + '**/*.ts', { ignore: 'node_modules/**' })
  for (var i in tsfiles) {
    console.log(tsfiles[i]);
    const { warnings, dependencies } = runASTAnalysis(
      fs.readFileSync(tsfiles[i], "utf-8")
    );
    const dirOutput = util.inspect(dependencies, { depth: null, colors: false }) + util.inspect(warnings, { depth: null, colors: false });  
    output_unit.add_log(dirOutput, false, "dmp_res.txt"); 
  }
  const jsfiles = await glob(input_file + '**/*.js', { ignore: 'node_modules/**' })
  for (var i in jsfiles) {
    console.log(jsfiles[i]);
    const { warnings, dependencies } = runASTAnalysis(
      fs.readFileSync(jsfiles[i], "utf-8")
    );
    const dirOutput = util.inspect(dependencies, { depth: null, colors: false }) + util.inspect(warnings, { depth: null, colors: false });  
    output_unit.add_log(dirOutput, false, "dmp_res.txt"); 
  }
}
