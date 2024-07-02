// loop
// let i = 1;
// let cem = 0;
// while(i <= 20) {
//     // 1 2 3 4 5 6 7 8
//     // cem += i; => cem = cem + i
//     cem += i;
//     i++;
// }

// console.log(cem)

// let ad = prompt('adinizi daxil edin');
// while(ad !== 'ramin') {
//     ad = prompt('adinizi daxil edin');
// }
// console.log("ehsen sene ramin")
// 'eldar' !== 'ramin' -> true

// while (1) {
//     console.log('salam')
// }
// console.log('sagol');

// let i = 1;
// let cem = 0;

// while (i <= 100) {
//     hasil *= i;
//     i++;
// }

// do {
//     cem += i;
//     i++;
// }while(i <= 100)
// console.log(cem);

// const CPUDakiReqem = 55;
// let number = +prompt('reqemi daxil edin');
// let addimSayi = 1;
// while(CPUDakiReqem !== number) {
//     if(number < CPUDakiReqem) {
//         alert("yuxari qalx")
//     }else if (number > CPUDakiReqem) {
//         alert('asagi dus')
//     }
//     addimSayi++;
//     number = +prompt('reqemi daxil edin');
// }

// console.log(`ehsen bu reqem ${number} idi,bu reqemi ${addimSayi} cehde tapdiniz`);

// for (let i = 1; i <= 50; i++) {
//   console.log(i * 2);
// }

// let i = 1
// for (;;) {
//     console.log("salam");
    
// }



// for (let i = 5; i <= 20; i++) {
//     if (i === 10) continue;
//     console.log(i);
// }

// const number = prompt('reqemi daxil edin'); //50


const word = "salam";
let newWord = ''
// for (let i = 0;i < word.length;i++){
//     newWord += word[i]
// }

for (i = word.length - 1; i >= 0; i--) {
        newWord += word[i]
}

console.log(newWord);