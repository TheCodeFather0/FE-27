const button = document.getElementById("btn");
const h1 = document.getElementById("h1");

// on -> function

/*
    onclick
    oncontextmenu
    onmouseover
    onmouseout
    onmousemove
    ondblclick
    onkeydown
    onsubmit
*/

// button.onclick = function (e) {
//   //   h1.innerText = "klik edildi"
//   console.log(e.target.style.color);
// };

// button.oncontextmenu = function(){
//     alert("mausun sag duymesine klik edildi")
// }

// button.onmouseover = () => button.style.background = "green"
// button.onmouseout = () => button.style.background = "purple"
// button.onmouseup = () => console.log('duyme buraxildi');
// button.onmousedown = () => console.log('duyme sixildi');
// button.onmousemove = () => console.log('hereket edir...');

// button.onclick = (e) => {
//   console.log(e.clientX);
// };

// window.onmousedown = () => {
//   window.onmousemove = (e) => {
//     button.style.marginLeft = e.clientX + "px";
//     button.style.marginTop = e.clientY + "px";
//   };
// };

// window.onmouseup = () => window.onmousemove = () => null

// window.onclick = e => {
//     console.log(e.button);
//     console.log("e.pageX: ",e.pageX);
//     console.log("e.screenX: ",e.screenX);
//     console.log("e.clientX: ",e.clientX);
// }

// button.ondblclick = () => {
//     console.log('double click');
// }

// let words = ""
// window.onkeydown = (e) => words += e.key
// button.onclick = () => console.log(words);

const usernameInp = document.getElementById("usernameInp");
const form = document.getElementById("form");

// form.onsubmit = (e) => {
//     e.preventDefault();
//     h1.innerText = usernameInp.value
//     usernameInp.value = ""
//     usernameInp.focus();
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   h1.innerText = usernameInp.value;
//   usernameInp.value = "";
//   usernameInp.focus();
// });

// window.addEventListener('mousemove',print)
// window.addEventListener('mousemove',()=> console.log('sagol'))

// function print(){
//     console.log('salam');
// }

// button.addEventListener("click",() => {
//     window.removeEventListener('mousemove',print)
//     console.log('event dayandirildi');
// })
// print()

let count = 3;
const countBox = document.getElementById("count");
const buttons = document.querySelectorAll(".button");
const newGameBtn = document.getElementById("newGameBtn");
const bombIndex = Math.floor(Math.random() * buttons.length);
countBox.innerText = count + " şansın var";

newGameBtn.setAttribute("disabled", "on");
buttons.forEach((btn) => btn.removeAttribute("disabled"));

buttons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    console.log(bombIndex);
    if (count > 1) {
      if (index === bombIndex) {
        newGameBtn.removeAttribute("disabled");
        countBox.innerText = "xezine💵💵💵💸💸💸💸💰💰💰💰💰💰💰🤑🤑🤑";
        buttons.forEach((btn) => btn.setAttribute("disabled", "on"));
      } else {
        count--;
        e.target.setAttribute("disabled","on")
        countBox.innerText = count + " şansın var";
      }
    } else {
      countBox.innerText = "bu gunde senin ucun yandiraq🚬";
      newGameBtn.removeAttribute("disabled");
      buttons.forEach((btn) => btn.setAttribute("disabled", "on"));
    }
  });
});

newGameBtn.addEventListener("click", () => location.reload());
