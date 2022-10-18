import React from "react";

interface HelloWorldProps {
  name: string;
}
console.log("123123");
export const HelloWorld: React.FC<HelloWorldProps> = ({ name }) => (
  <h1>Hello {name ? name : "World"}</h1>
);
