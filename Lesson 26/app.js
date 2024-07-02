// arr.length = 10
// arr[9] = "Ruslan"
// console.log(arr);

// console.log(arr[arr.length - 1]);

// let reversedArr = [];

// for (let value of arr) {
//     console.log(value);
// }

/*
    push
    pop

    unshift
    shift
*/

// arr.reverse()
// let result = arr.concat([1,2,4])
// console.log(result);
// console.log(arr.includes("Nihad"));

// let newArr = [];
// for (let user of arr) {
//     newArr.unshift(user)
// }

// console.log(newArr);

// arr.shift()
// arr.shift()
// arr.push("Isi","Nihad")
// console.log(arr);

// arr.unshift("mesedi")
// let a = arr.pop();
// console.log(a);
// console.log(arr);

// FIFO -> First In First Out
// LIFO -> Last In First Out

// 1-2-3
// 3-2-1

let arr2 = [
  [1, 2, 3, [1, 2, 3]],
  [4, 5, 6],
  [7, 8, 9],
];

// const silinen = arr.splice(5)
// console.log("silinen: ",silinen)

// console.log("old arr: ",arr);
// console.log('------------------------------------');

// let a  = arr.splice(0,1)
// console.log(a);
// console.log('------------------------------------');

// console.log("new arr: ",arr);

// let str = "salam";
// const a = str.split("").join("-")
// console.log(arr.join("-"));

// 4 pm al,ilk ucunu arraya yazdir,4cu pmdaki deyeri ise arrayin icerisinden sil,yoxdursa massivde bele data yoxdur.

// let users = [];
// const user1 = prompt('daxil et');
// const user2 = prompt('daxil et');
// const user3 = prompt('daxil et');
// const delUser = prompt('hansini silek?');

// users.push(user1,user2,user3)
// if (users.includes(delUser)) {
//     const index = users.indexOf(delUser)
//     users.splice(index,1)
// }
// console.log(users);

// let arr = [
//   "Isi",
//   "Nihad",
//   "Kamal",
//   "Nazim",
//   "Ruslan",
//   "Farhad",
//   "Emil",
//   "Fidan",
//   "Arzu",
// ];
// arr.splice(2,0,"admin","salam")
// arr.splice(0,arr.length, "admin");
// console.log(arr.toString());


let arr = [
    [1,2,3,4,[1,2,3]],
    [2,3,4,5],
    [2,3,4,5],
    [2,3,4,5],
    [2,3,4,5],
    [4,5,6]
]

// let newArr = []
// for (let x of arr) {
//     for (let y of x) {
//         newArr.push(y)
//     }
// }
// console.log(newArr);


console.log(arr.flat());

// bir funksiya yazin,iki arrayi birlesdirib bir etsin,lakin hansi simvoldan birden cox istifade edilibse onu 1 eded olaraq qeyd etsin.
let arr3 = [1,2,3,4]
let arr4 = [3,4,5,6]
let arr5 = [1,2,3,4,5,6]