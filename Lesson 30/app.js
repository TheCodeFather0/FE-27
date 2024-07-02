// const divs = document.getElementsByClassName(".test");
// divs.forEach(e => {
//     console.log(e);
// })
// console.log(typeof divs);

// // html collection
// // node list

/*
    hasAttribute
    getAttribute
*/
// div.setAttribute("salam","salam bele bir atribut ola bilmez")
// console.log(div);
// console.log(div.hasAttribute("id"));
// console.log(div.getAttribute("salam"));
// const div = document.getElementById('title');
// const chngClsBtn = document.getElementById("chngClsBtn")
// chngClsBtn.onclick = () => {
//     // div.classList = 'mavi test'
//     // div.classList.add("salam")
//     div.classList.remove("qirmizi")
//     div.classList.add("mavi")
//     console.log(div.classList);
// }

// const darkModeButton = document.getElementById('darkModeButton');
const modeButton = document.getElementById("modeButton");

// darkModeButton.onclick = () => {
//     document.body.classList.add("dark");
//     document.body.classList.remove("light");
// }

// modeButton.onclick = () => {
//     if (document.body.classList.contains("dark")) {
//         document.body.classList.remove("dark");
//         document.body.classList.add("light");
//         modeButton.innerText = '🌜'
//     }else {
//         document.body.classList.remove("light")
//         document.body.classList.add("dark");
//         modeButton.innerText = '🌞'
//     }
// }

/*
    createElement
    removeElement
    appendChild
    append
    prependChild
*/

const newTodoInp = document.getElementById("newTodoInp");
const addTodoBtn = document.getElementById("addTodoBtn");
const list = document.getElementById("list");

addTodoBtn.onclick = () => {
  const todo = newTodoInp.value;
  const li = document.createElement("li");
  const button = document.createElement("button");

  newTodoInp.value = "";
  newTodoInp.focus();

  li.classList.add("list-item");
  button.classList.add("delete-button");
  button.innerText = "🗑️";
  li.innerText = todo;
  li.appendChild(button);
  list.prepend(li);

  deleteTodo();
};

const deleteTodo = () => {
  const deleteButtons = document.getElementsByClassName("delete-button");
  for (let button of deleteButtons) {
    button.onclick = () => {
      const li = button.parentNode;
      list.removeChild(li);
    };
  }
};

deleteTodo();


delAllTodos.onclick = () => {
    list.innerHTML  = ""
}