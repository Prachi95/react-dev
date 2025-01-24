const header = React.createElement("h1", {id: "header", abc: "ABC"}, "Hello World!");
const reactRoot = ReactDOM.createRoot(document.getElementById('root'));
console.log(header)

reactRoot.render(header);
