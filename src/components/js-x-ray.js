import { runASTAnalysis } from "@nodesecure/js-x-ray";
import * as util from "util";
import * as fs from "fs";
import { output_unit } from "../../main.js";
export function detecting_malicious_patterns(input_file) {
    const { warnings, dependencies } = runASTAnalysis(
        fs.readFileSync(input_file, "utf-8")
      );
    const dirOutput = util.inspect(dependencies, { depth: null, colors: false }) + util.inspect(warnings, { depth: null, colors: false });  
    output_unit.add_log(dirOutput, false, "dmp_res.txt"); 
}
