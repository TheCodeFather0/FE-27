// console.dir(document);

// console.log(document.body.childNodes);

// console.log(document.getElementById("box"));
const box = document.getElementById("box");
box.style.background = "red";
box.style.padding = "10px";
box.style.textAlign = "justify";
box.textContent = "salam olsun Kamaldan Asimana...";

// const descriptions = document.getElementsByClassName("desc")
// const descriptions = document.getElementsByTagName("p")
// console.log(descriptions[0]);

// descriptions[0].style.color = "red"
// for (let elem of descriptions) {
//     console.log(elem);
//     elem.style.color = "red"
// }
// console.log(descriptions);

/*

    getElemById
    getElemsByClass 


*/

// const arr = [
//   "Isi",
//   "Emil",
//   "Nazim",
//   "Nihad",
//   "Asiman",
//   "Kamal",
//   "Ruslan",
//   "Fidan",
//   "Arzu",
// ];
// const ol = document.querySelector('#students');
// arr.forEach((student) => {
//     console.log(student);
//     ol.innerHTML = `<li>${student}</li>`
// })

let count = 0;
let buttonWidth = 100;
const countBox = document.getElementById("count");
const button = document.getElementById("button");

countBox.textContent = count;
button.style.width = buttonWidth + "px";

button.onclick = () => {
  count += 1;
  countBox.textContent = count;

  buttonWidth += 10;
  button.style.width = buttonWidth + "px";
};
