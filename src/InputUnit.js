import * as fs from "fs";
import { tranEtsToJs } from "./tranEtsToJs.js"; 

class InputUnit { 
    in_addr; 
    out_addr; 
    constructor(_in_addr, _out_addr) {
        this.in_addr = _in_addr; 
        this.out_addr = _out_addr; 
        console.log('# input file address : ' + this.in_addr);
        console.log('# output file address : ' + this.out_addr);
        if(!fs.existsSync(this.out_addr) || !fs.existsSync(this.in_addr)) {
            console.log('error: input/out目录不存在');
            exit(-1); 
        } 
    }

    init() {
        tranEtsToJs(this.in_addr); 
    }
}

export default InputUnit; 