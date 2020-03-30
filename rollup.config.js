import babel from "rollup-plugin-babel"
import replace from "rollup-plugin-replace"
import commonjs from "rollup-plugin-commonjs"
import nodeResolve from "rollup-plugin-node-resolve"
import { sizeSnapshot } from "rollup-plugin-size-snapshot"

import pkg from "./package.json"
const name = "module";
const input = "./modules/index"


const globals = {
};
const babelOptionsCJS = {
  exclude: /node_modules/,
  runtimeHelpers: true
};
const babelOptionsESM = {
  exclude: /node_modules/,
  runtimeHelpers: true,
  plugins: [["@babel/transform-runtime", { useESModules: false }]]
};
const commonjsOptions = {
  // include: /node_modules/
  namedExports: {
     "node_modules/react-is/index.js": ["isValidElementType"]
  }
};
const external = id => !id.startsWith(".") && !id.startsWith("\/");

export default [{
  input,
  output: { file: `cjs/index.js`, format: "cjs" },
  external:Object.keys(globals),
  plugins: [
    babel(babelOptionsCJS),
    commonjs(commonjsOptions),
    sizeSnapshot()
 ]
},{
   input,
   output: { file: `umd/index.js`, format: "umd", name },
   external: Object.keys(globals),
   plugins: [
     babel(babelOptionsESM),
     commonjs(commonjsOptions),
     replace({ "process.env.NODE_ENV": JSON.stringify("development") }),
     // sizeSnapshot()
   ]
}]
