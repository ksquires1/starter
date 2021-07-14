// select the root node
console.log("html-1", document.querySelector("html"));
console.log("html-2", document.getElementsByTagName("html"));
console.log("html-3", document.querySelector("p").getRootNode);

// select the last child of the root node
console.log("root", document.querySelector("p").lastChild)
console.log("last child", document.querySelector("html").lastElementChild);

// select all the children of the body element

console.log("body children", document.querySelector("body").children);

// select the next sibling of the h2 node

console.log("h2 next sibling", document.querySelector("h2").nextElementSibling);

// select the parent element of the h1 node

console.log("h1 parent", document.querySelector("h1").parentElement);S

