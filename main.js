#!/usr/bin/env node

import * as fs from "fs";
import { Command } from "commander";
import { detecting_malicious_patterns } from "./src/components/js-x-ray.js";

console.log('# jtsast');

const program = new Command();

program
  .version('1.0.0')
  .option('--in [inAddr]', 'input file address', "./in/")
  .option('--out [outAddr]', 'output file address', "./out/")
  .option('--dmp', "detecting_malicious_patterns")
  .parse(process.argv);

let inAddr = program.in; 
let outAddr = program.out; 

if(!fs.existsSync(outAddr) || !fs.existsSync(inAddr)) {
  console.log('error: input/out目录不存在');
  exit(-1); 
} 

console.log('# input file address : ' + inAddr);
console.log('# output file address : ' + outAddr);

if(program.opts().dmp) {
  detecting_malicious_patterns(inAddr + "test1.js", outAddr + "conslusion.txt")
}
  
