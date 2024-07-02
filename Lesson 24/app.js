// RAM ->  Random Access Memory

/*
    value type
    number
    string
    boolean
    undefined
    null


    reference type
    obyekt

*/

let a = 5;
let b = 5;

// const user = {
//     name:'Ramin',
//     surname:'Mammadzada'
// }

// const user3 = {
//     name:'Adil',
//     department:'development'
// }

// const user2 = Object.assign({},user)
// const user2 = {...user3,...user}
// console.log({...user});
// rest
//
// eradan evvel
// for (let key in user) {
//     user2[key] = user[key]
// }

// user2.name = "Asiman"
// console.log("user: ",user);
// console.log("user2: ",user2);

// console.log(user == user2);

// const user = {
//     name:'Asiman',
//     surname:'Developer',
//     age:56,
//     department:'development'
// }
// const user2 =

// let car = {
//     model:{
//         marka:'bmw',
//         year:2002
//     }
// }

// let car2 = Object.assign({},car);

// car.model.year = 2005
// console.log("car: ",car);
// console.log("car2: ",car2);

// bind,call,apply
// const user2 = {};
// for (let keys in user) {
//     user2[keys] = user[keys]
// }

// console.log("user: ",user);
// console.log("user2: ",user2);

// const test = () => {
//     console.log(this);
// }
// test();

// console.log(user.getAllName());

// const user = {
//     age:56,
//     name:'Asiman',
//     surname:'Developer',
//     department:'development',
//     getAllName:function(){
//         return `${this.name} ${this.surname}`
//     }
// }
// const ab = "surname"
// console.log(user[ab]);

// smart parameters,rest,

// function c(...reqmeler){
//     console.log(reqmeler);
// }
// // rest operator
// c(1,2,3,4,5,6,7,8,9)

// function showName({surname,age,name}) {
//   console.log(name + " " + surname + ": " + age);
// }
// showName({
//   name: "Ramin",
//   surname: "Mammadzada",
//   age: 36,
// });


// let result = Math.pow(2,9)
// let result = Math.abs(-5)
// let result = Math.min(45,96,32,65,98,71,10)
// let result = Math.max(45,96,32,65,98,71,10)
// // result = Math.floor(-4.9)
// // result = Math.ceil(-4.8)
// // result = Math.round(2.8)
// result = Math.PI
// result = Math.sqrt(25)
// // result = Math.cbrt(8)
// // result = Math.trunc(50.99)
// result = Math.floor(Math.random() * 1000) + 1 //1-10
// console.log(result);




// 1. bir funksiya yaziriq icerisinde iki arqument var,funksiyanin adi kokAlmaq olacaq
// kokAlmaq(8,3)

// Task-01
// Konsola doğum tarixini çıxarın.
// Adınız, cinsiniz və doğum tarixiniz olan user obyekti yaradın (name, gender, birthday).
// Konsola doğum tarixini çıxarın.

// Task-02
// Obyektə yaş (age) əlavə edin və doğum tarixini silin.
// İstifadəçi məlumatları olan bir obyekt verilib.
// Bu obyektə yaş (age) əlavə edin və doğum tarixini silin.
// Alınmış obyekti konsola çıxarın.

// Task-03
// Obyektə metodlar əlavə edin.let
// Obyekt verilib. Ona növbəti metodları əlavə edin:
//   setAge — istifadəçi yaşını dəyişdirən metoddur.
//   getYearsBeforeRetirement — pensiyaya qədər istifadəçinin
// qalan illərinin sayını qaytaran metoddur.
// Bu metodları çağırın.

// Task-04
// Kalkulyator obyekti yaradın.
// Əsas riyazi hesablamaları yerinə yetirən və nəticəni yaddaşda saxlaya bilən kalkulyator obyekti yaradın.
//   - Obyekt yaradın və toplama, çıxma, vurma, bölmə üçün metodlar əlavə edin.


function nthRoot(number,n){
    if(number<0 && n%2==0){
        throw new Error("Cannot find even root of a negative number")
    }
    else if(n==0){
        return 1;
    }
    else if(n==1){
        return number
    }
    const epsilon  = 0.0000001
    let guess = number/2
    let prevGuess = 0
    
    while(Math.abs(guess-prevGuess)>epsilon){
        prevGuess = guess
        let temp =1
        for(let i = 0;i<n-1;i++){
            temp*=guess
        }
        guess = ((n-1)* guess +number /temp)/n
    }
    return guess
}


const number = +prompt("Ededi Daxil Edin")
const n = +prompt("Necenci Dereceden Olsun")
const root = nthRoot(number,n)
console.log(`The ${n}th root of ${number } is approximately ${root}`)