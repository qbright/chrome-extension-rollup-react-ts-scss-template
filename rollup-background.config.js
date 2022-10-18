import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import progress from "rollup-plugin-progress";

export default {
  input: "src/background/background.ts",
  output: {
    file: "dist/background.js",
    format: "es",
    sourcemap: process.env.NODE_ENV === "development",
  },
  plugins: [
    progress({
      clearLine: process.env.NODE_ENV === "development", // default: true
    }),
    resolve(),
    commonjs(),
    typescript(),
  ],
};
