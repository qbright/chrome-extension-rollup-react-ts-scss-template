import "./style.scss";

import React from "react";
import { createRoot } from "react-dom/client";
import { HelloWorld } from "./helloworld";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<HelloWorld name="World" />);

console.log(process.env.NODE_ENV);
