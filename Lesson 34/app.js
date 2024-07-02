// let users = ["Fidan", "Arzu", "Aydan", "Emil", "Nihad", "Kamal"];
// destructure

// const [,,,,,avtos] = users

// const points = [50,20,100,200]
// const [,calisqaninBali,calismayaninBali] = points

//
// console.log(avtos);

// let obj = {
//   age: 56,
//   firstName: "Ramin",
//   lastName: "Mammadzada",
//   username: "TheCodeFather0",
// };

const ad = document.getElementById("ad");
const soyad = document.getElementById("soyad");
const nick = document.getElementById("nick");

// const { firstName: f, lastName: l, username: u } = obj;

// ad.innerHTML = `<strong>${f}</strong>`;
// soyad.innerHTML += `<strong> ${l}</strong>`;
// nick.innerHTML += `<strong> ${u}</strong>`;

// const obj2 = {
//   user1: { firstName: "Admin", lastName: "Adminovic" },
//   user2: { firstName: "Kamal", lastName: "Camalo" },
// };

// const {
//   user1: { firstName:f1, lastName:l1 },
//   user2: { firstName:f2, lastName:l2 },
// } = obj2;
// console.log(firstName);
// console.log(f2);

// const obj2 = {
//     user1: {
//         info: {
//             phoneNumber:'0997140304'
//         }
//     }
// }

// const {user1:{info:{phoneNumber}}} = obj2

// console.log(phoneNumber);

// function sayHello({ lastName, age, firstName }) {
//   console.log(`salam, men ${firstName} ${lastName}.Menim ${age} yasim var`);
// }

// smart parameters
// sayHello({
//   firstName: "ramin",
//   lastName: "mammadzada",
//   age: 56,
// });


// iife
// Immediately Invoked Function Expression

function a(){
   return function b(){
        return function c(){
            return "salam"
        }
    }
}
console.log(a()()());