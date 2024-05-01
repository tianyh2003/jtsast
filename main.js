#!/usr/bin/env node

import { Command } from "commander";
import InputUnit from "./src/InputUnit.js"
import OutputUnit from "./src/OutputUnit.js";
import ProcessUnit from "./src/ProcessUnit.js";

console.log('# jtsast');

const program = new Command();

program
  .version('1.0.0')
  .option('--in [inAddr]', 'input file address', "./in/test1/")
  .option('--out [outAddr]', 'output file address', "./out/")
  .option('--dmp', "detecting_malicious_patterns")
  .parse(process.argv);

export const input_unit = new InputUnit(program.in, program.out); 
export const output_unit = new OutputUnit(program.out); 
export const process_unit = new ProcessUnit(); 

if(program.opts().dmp) {
  process_unit.dmp_process = true; 
}

input_unit.init(); 
console.log("# finish init"); 
process_unit.deal(); 
console.log("# finish deal"); 