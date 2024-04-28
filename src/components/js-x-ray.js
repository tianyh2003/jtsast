import { runASTAnalysis } from "@nodesecure/js-x-ray";
import * as util from "util";
import * as fs from "fs";

export function detecting_malicious_patterns(input_file, output_file) {
    const { warnings, dependencies } = runASTAnalysis(
        fs.readFileSync(input_file, "utf-8")
      );
      
    // console.log(dependencies);
    // console.dir(warnings, { depth: null });

    const dirOutput1 = util.inspect(dependencies, { depth: null, colors: false });  
    fs.writeFileSync(output_file, dirOutput1 + "\n", (err) => {  
        if (err) throw err;   
    });
    const dirOutput2 = util.inspect(warnings, { depth: null, colors: false });  
    fs.appendFileSync(output_file, dirOutput2, (err) => {  
        if (err) throw err;  
    });
    console.log("输出已保存到文件" + output_file);  
}
