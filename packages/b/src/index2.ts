// import * as src1 from '../src1'
// console.log('in src2', src1.E)
// import {} from "@zerollup/ts-transform-paths"


// import * as src1 from "../src1/index1"
import * as src1 from "@a/index1"
console.log('in src2', src1.E)

import {s} from "./2"
console.log('two', s)

export {src1}