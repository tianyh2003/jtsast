import { compute_add } from "./compute.js";

let a = 1; 
let b = 2; 

let c = compute_add(a, b); 

if(c != 3) console.log("error"); 
else console.log("success"); 