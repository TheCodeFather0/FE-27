// let number = +prompt('reqem');

// if (number > 9 && number < 100) {
//     while(number < 100) {
//         number += 7;
//     }
//     document.write(number)
// }else {
//     document.write("iki reqemli eded daxil edin");
// }

// for(let i = 100; i < 1000; i++) {
//     if (i % 10 === 0) console.log(i);
// }

// let i = 1;
// while (i < 100) {
//   console.log(i * 10);
//   i++;
// }

// let tekEdedlerinCemi = 0;
// for (let i = 10; i < 100; i++) {
//     if(i % 2 === 1) {
//         tekEdedlerinCemi += i
//     }
// }
// console.log(tekEdedlerinCemi);

// reqem al,uc reqemlileri tap,ve uc reqemlilerden boluneni tap

// const number = +prompt('reqemi yaz qardasoglu');
// let ededlerinCemi = 0;
// for (let i = 0; i < 1000; i++) {
//     if (i % number === 0) {
//         ededlerinCemi += i;
//     }
// }

// let number = prompt('number');

// while(number > 1) {
//     if (number % 2 === 1) {
//         console.log(number)
//     }
//     number--
// }

/*
 *
 **
 ***
 ****
 */

// let starCount=+prompt("Enter the number");

// for (let i = starCount; i > 0; i--) {
//     for(let j=0; j < i;j++){
//         document.write("* ");
//     }
//     document.write("<br>");
// }
// *
//    **
//   ***
//  *****
// *******

//FUNCTIONS

// ternary operator ? :

// let age = prompt('yasivi yaz brat');
// let message =
//   age < 18
//     ? "ged dersivi oxu"
//     : age < 35
//     ? "sen hele cavansan"
//     : "senin vaxtindir...";

// if (age < 18) {
//   message = "ged dersivi oxu";
// } else if (age < 35) {
//   message = "sen hele cavansan";
// } else {
//   message = "sen ders oxuma";
// }
// document.write(message)

/* FUNCTISON */

// function salamla(){
//     document.write("salam olsun...")
// }
// salamla();
// call
// scope

// "use strict"
// const ad = undefined;

// function salamla(){
//     const ad = "ramin"
//     document.write(`salam cenab ela hezretleri MR ${ad}`)
// }
// salamla(); //

// document.write("<br/>" + ad) // error 2

/*
    azadliq
    zindan heyati
*/

// global scope
// local scope

// let lang = "javascript"

// function myData(){
//     const lang = 'python'
//     document.write(lang)
// }
// myData();
// console.log(lang)

// function raminiSalamla() {
//     document.write('salam ramin')
// }
// raminiSalamla();

// function kamaliSalamla() {
//     document.write('salam kamal')
// }
// kamaliSalamla();

// function salamla(ad = 'coder',urekSozleri = "hecne yazmayib"){
//     // if (!urekSozleri) urekSozleri = "mesaj gonderilmeyib"

//     document.write(`salam ${ad}, ${urekSozleri} <br />`)
// }
// salamla("ramin","!(javascript ela dildir)")
// salamla("kamal")
// salamla()

// const username = prompt('adinizi daxil edin');
// const favoriteLang = prompt('sevdiyin programlasdirma dili');

// function UserInfo(ad,dil = 'html'){
//     document.write(`${ad} ${dil} proqramlasdirma dilini cox sevir`)
// }
// UserInfo(username,favoriteLang)

// one function one action

// function cemle(a,b){
//     document.write(a + b + "<br />")
//     document.write(a * b)
// }

// cemle(4,5)

let number1 = +prompt("birinci reqemi daxil edin");
let operator = prompt("operatoru daxil edin (* , / , + , -)");
let number2 = +prompt("ikinci reqemi daxil edin");


while (isNaN(number1) && isNaN(number2)) {
    alert('zehrimari duz yaz!')
    number1 = +prompt("birinci reqemi daxil edin");
    operator = prompt("operatoru daxil edin (* , / , + , -)");
    number2 = +prompt("ikinci reqemi daxil edin");
  }

function calc(n1, o, n2) {
  switch (o) {
    case "+":
      document.write(`${n1} + ${n2} = ${n1 + n2}`);
      break;
    case "-":
      document.write(`${n1} - ${n2} = ${n1 - n2}`);

      break;
    case "*":
      document.write(`${n1} * ${n2} = ${n1 * n2}`);

      break;
    case "/":
      document.write(`${n1} / ${n2} = ${n1 / n2}`);

      break;
    default:
      document.write("bele operator yoxdur");
  }
}
calc(number1, operator, number2);
