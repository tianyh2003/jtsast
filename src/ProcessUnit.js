import { input_unit } from "../main.js";
import { detecting_malicious_patterns } from "./components/js-x-ray.js";
import { jelly_callgraph_html } from "./components/jelly.js";

class ProcessUnit {
    all_process = false; 
    dmp_process = false; 
    callgraph_html = false; 
    constructor() {}
    deal() {
        if(this.dmp_process == true) {
            detecting_malicious_patterns(input_unit.in_addr); 
            console.log("# finsh dmp"); 
        }
        if(this.callgraph_html == true) {
            jelly_callgraph_html(); 
            console.log("# finsh callgraph_html"); 
        }
    }
}

export default ProcessUnit; 