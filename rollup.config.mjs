import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import del from "rollup-plugin-delete";
import { dts } from "rollup-plugin-dts";

import packageJson from "./package.json" assert { type: "json" };

/** @type {import('rollup').RollupOptions}*/
export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
      },
      {
        file: packageJson.module,
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve(),
      postcss({
        extract: true,
      }),
      typescript(),
      terser(),
    ],
  },
  {
    input: "./dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [
      copy({
        targets: [{ src: 'dist/cjs/index.css', dest: 'dist/' }],
        verbose: true,
        hook: 'buildStart',
      }),
      del({
        targets: ['dist/cjs/index.css', 'dist/esm/index.css'],
        verbose: true,
        hook: 'buildEnd',
      }),
      dts(),
    ],
    external: [/\.(css|less|scss)$/],
    watch: false,
  },
];
