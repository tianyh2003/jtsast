import { input_unit } from "../main.js";
import { detecting_malicious_patterns } from "./components/js-x-ray.js";
class ProcessUnit {
    all_process = false; 
    dmp_process = false; 
    constructor() {}
    deal() {
        if(this.dmp_process == true) {
            detecting_malicious_patterns(input_unit.in_addr); 
            console.log("# finsh dmp"); 
        }
    }
}

export default ProcessUnit; 