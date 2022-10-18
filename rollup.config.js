import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import progress from "rollup-plugin-progress";
import scss from "rollup-plugin-scss";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import path from "path";

export default {
  input: "src/main/main.tsx",
  output: {
    file: "dist/main.js",
    format: "es",
    sourcemap: process.env.NODE_ENV === "development",
  },
  plugins: [
    progress({
      clearLine: process.env.NODE_ENV === "development", // default: true
    }),
    scss({
      processor: () => postcss([autoprefixer()]),
      includePaths: [
        path.join(__dirname, "../../node_modules/"),
        "node_modules/",
      ],
    }),
    replace({
      preventAssignment: true,
      values: {
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      },
    }),
    ,
    resolve(),
    commonjs(),
    typescript(),
  ],
};
