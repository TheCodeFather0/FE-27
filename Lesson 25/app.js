// 1. Car adinda constructor function yaradın, marka,model,year,engine deyə key-ləri olsun.
// Bu constructor vasitəsi ilə 3 fərqli obyekt yaradın

// function Car(m,ml,y,e){
//     this.marka = m;
//     this.model = ml;
//     this.year = y;
//     this.engine = e
//     this.ad = "Ramin"
// }

// const car1 = new Car("Mercedess","w210",2002,2200)
// const car2 = new Car("Mercedess","w210",2001,2200)
// const car3 = new Car("Mercedess","w210",2003,2200)
// console.log(car1);
// console.log(car2);
// console.log(car3);

// const user1 = {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496"
//       }
//     }
// }

// const user2 = Object.assign({},user1)

// user1.name = 'Asiman'
// console.log("user1: ",user1);
// console.log("user2: ",user2);

// user2 ={...user1}
// const user2 = {...user1}
// user2.name = 'Asiman'
// user1.username = 'WebDev'

// console.log("user1: ",user1);
// console.log("user2: ",user2);

// const propertyTaker = (obj, str) => obj[str] ? obj[str] : "bele bir property yoxdur"

// const user = {
//   name: "ramin",
//   surname: "mammadzada",
// };

// console.log(propertyTaker(user, "name"));


// const existsAndTruthy = (obj,str) => !!obj[str]
// console.log(existsAndTruthy({x:'a',y:null,z:'c'},'y') ); 
//////////////////////////////////////////////////


// let str = `${2+2}`
// console.log(str);


// let str = 'kamal'
// const getLength = (str)  => {
//     let cem =0;
//     for (let i = 0; i < str.length; i++) {
//         cem++
//     }
//     console.log(cem);
// }
// getLength(str)
// console.log(str[str.length - 1]);

/*
    primitive,value,immutable

    nonprimitive,reference,mutable
*/

// let a = "salam"
// a[0] = 'z'
// console.log(a[0]);

// let arr = [1,2,3,4]
// arr[0] = 5;
// console.log(arr[0]);


/*
    toUpperCase()
    toLowerCase()
    indexOf()
    includes()
    startsWith()
    endsWith()
    slice()
    substr()
    substring()
    chatAt()
    charCodeAt()
    trim()
    trimStart()
    trimEnd()
    padStart()
    padEnd()
    split()
    repeat()
    replace()
    replaceAll()
*/

// let username = prompt('qardas oglu adivi yaz');
let str = 'salam sagol salam olsun sizlere '
const str2 = 'nus olsun brat...'
let result = str.toUpperCase()
result = str.toLowerCase()
// result = str.indexOf('kelem',2)
// result = str.includes("asiman")
// result = str.startsWith("e") 
// result = str.endsWith('ye')
// result = str.slice(-8,-3)
// result = str.substring(8,3)
// result = str.substr(-8,5)
// result = str.charAt(1)
// result = str.charCodeAt(0)
// result = str.concat(" ",str2)
// result = str.padEnd(25,"0")
// result = str.padStart(25,"0")
// str = "admin@gmail.com"
// result = str.split("@")
// result = str.repeat(5)
result = str.replaceAll("salam","hallo")
console.log(result);
console.log(str);
// console.log(username.trim());
