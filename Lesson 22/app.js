// function sum(){
//     for (let i = 0; i <= 10; i++) {
//         return i
//     }
//     console.log("salam");
// }
// console.log(sum());

// İstifadəçi adını parametr kimi qəbul edən funksiya yazın.
// İstifadəçi adını parametr kimi qəbul edən və konsola
// «[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin.
// Funksiyanı 3 müxtəlif ad üçün çağırın.

// function showMovie(age) {
//     if (age < 18) {
//         return
//     }

//     console.log("OKOKOK");
// }

// function checkCar(car) {
//   if (car === "07") {
//     return "sene her yerde yasil isiq...";
//   } else if (car !== "mercedess") {
//     return "olmaz!";
//   }
//   return "olar!";
// }

// const car = prompt("masinivi yaz");
// document.write(checkCar(car));

// function isEven(n) {
//     return !(n % 2)
// }

// console.log(isEven(7)); // false
// console.log(isEven(8)); // true

// const a = "salam"    -> string expression
// const b = 5   -> number expression
// const c = true  -> boolean expression

// const isEven = function(n){
//     return !(n % 2)
// } //function expression

// const isEven = function(){
//     console.log(!(n % 2));
// } //anonym expression

// const isEven = (n) => !(n % 2)

// const isEven = () => {

// }//arrow function

// function sum(a,b){
//     return a + b
// } function declaration

// const sum = function(a,b) {
//     return a + b
// } function expression

// const sum = function(){
//  console.log(6 + 8);
// } anonym function
// sum = null

// const sum = () => {} arrow

// hoisting
// console.log(sum(3,4));

// const sum = (a,b) => a + b
// call back

// const chekCar = (carName, ok, error) => {
//   if (carName !== "mercedess") {
//     error();
//   } else {
//     ok();
//   }
// };

// const a = () => alert("sen artiq aramizadasan")
// const b = () => alert("standartlara uygun deyil")
// chekCar("bmw",a,b);

// const checkStuden = (name, activity, success, unsuccess) => {
//   if (activity === "ders oxumaq") {
//     success(name);
//   } else if (
//     activity === "ders oxumamaq" ||
//     activity === "telefonla oynamaq" ||
//     activity === "oz aleminde olmaq"
//   ) {
//     unsuccess(name);
//   }
// };

// const successFunc = (name) => alert(`ehsen sene ${name}`);
// const unsuccessFunc = (name) => alert(`avara ${name}`);

// checkStuden("ramin", "oz aleminde olmaq", successFunc, unsuccessFunc);

// rock paper sciss

const game = (name,user, comp, winnerFunc, drawFunc) => {
  if (user === "paper" && comp === "rock") {
    winnerFunc(name,user,comp);
  } else if (user === "scissors" && comp === "paper") {
    winnerFunc(name,user,comp);
  } else if (user === "rock" && comp === "scissors") {
    winnerFunc(name,user,comp);
  } else if (comp === "paper" && user === "rock") {
    winnerFunc("computer",comp,user);
  } else if (comp === "scissors" && user === "paper") {
    winnerFunc("computer",comp,user);
  } else if (comp === "rock" && user === "scissors") {
    winnerFunc("computer",comp,user);
  } else {
    drawFunc();
  }
};

const selections = ['rock','paper','scissors']
const randomIndex = Math.floor(Math.random() * selections.length)


const ad = prompt("adinizi qeyd edin");
const user = prompt("(rock / paper / scissors)");
const comp = selections[randomIndex];
console.log(comp);
const WINNER_FUNC = (name,winner, looser) => {
    document.write(`${name} is winner <br />`)
    document.write(`winner is ${winner} <br />looser is ${looser}`)
}
const DRAW_FUNC = () => document.write(`HECKIM QALIB GELMEDI🚬`)

game(ad,user, comp,WINNER_FUNC,DRAW_FUNC);
