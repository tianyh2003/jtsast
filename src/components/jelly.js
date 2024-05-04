import { exportCallGraphHtml } from "@cs-au-dk/jelly/lib/output/visualizer.js";
import Solver from "@cs-au-dk/jelly/lib/analysis/solver.js";
import { input_unit } from "../../main.js";
import  visualizer_1  from "@cs-au-dk/jelly/lib/output/visualizer.js";
import analyzer_1 from "@cs-au-dk/jelly/lib/analysis/analyzer.js";
import files_1 from "@cs-au-dk/jelly/lib/misc/files.js";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

export function jelly_callgraph_html() {
    let files; 
    files = files_1.expand(input_unit.in_addr);
    const solver_1 = __importDefault(Solver);
    const solver = new solver_1.default();
    const f = solver.fragmentState;
    const vr = {};
    analyzer_1.analyzeFiles(files, solver);
    const file = input_unit.out_addr + "callgraph_html_res.html";
    visualizer_1.exportCallGraphHtml(f, file, vr);
    console.log(`Call graph written to ${file}`);
}

export function jelly_dataflow_html() {
    let files; 
    files = files_1.expand(input_unit.in_addr);
    const solver_1 = __importDefault(Solver);
    const solver = new solver_1.default();
    const f = solver.fragmentState;
    const vr = {};
    analyzer_1.analyzeFiles(files, solver);
    const file = input_unit.out_addr + "dataflow_html_res.html";
    visualizer_1.exportDataFlowGraphHtml(f, file, vr);
    console.log(`Data-flow graph written to ${file}`);
}