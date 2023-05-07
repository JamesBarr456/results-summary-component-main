import data from "./data.json" assert {type: "json"};

let icon = document.querySelectorAll(".icon");

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
data.forEach(element => {
    console.log(data);
    icon[0].setAttribute("src", element[0])
})
