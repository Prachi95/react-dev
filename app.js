import React from "react";
import ReactDOM from "react-dom/client";

const header = React.createElement("h1", {id: "header", abc: "ABC"}, "Hello World!");
const reactRoot = ReactDOM.createRoot(document.getElementById('root'));

reactRoot.render(header);
