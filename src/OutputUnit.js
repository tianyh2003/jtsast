
import * as fs from "fs";

class OutputUnit {
    out_addr; 
    result_log = ""; 
    reserve_result = ""; 
    err_num = 0; 
    success_num = 0; 
    constructor(_out_addr) {
        this.out_addr = _out_addr; 
    }
    add_log(_log, _err, _output_file) {
        fs.appendFileSync(this.out_addr + _output_file, _log + "\n", (err) => {  
            if (err) throw err;   
        });
        if(_err) this.err_num++;
        else this.success_num++; 
    }
}

export default OutputUnit; 