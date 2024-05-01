import { runASTAnalysis } from "@nodesecure/js-x-ray";
import * as util from "util";
import * as fs from "fs";
import { output_unit } from "../../main.js";

export function detecting_malicious_patterns(input_file) {
  fs.readdir(input_file, (err, files) => {  
    if (err) {  
        console.error("Could not list the directory.", err);  
        process.exit(1);  
    }   
  
    files.forEach(filename => {  
        const parts = filename.split('.');  
        if(parts[parts.length - 1] == "js") {
          const { warnings, dependencies } = runASTAnalysis(
              fs.readFileSync(input_file + filename, "utf-8")
            );
          const dirOutput = util.inspect(dependencies, { depth: null, colors: false }) + util.inspect(warnings, { depth: null, colors: false });  
          output_unit.add_log(dirOutput, false, "dmp_res.txt"); 
        }  
    });  
  });
}
