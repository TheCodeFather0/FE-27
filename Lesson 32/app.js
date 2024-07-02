// const incrementBtn = document.getElementById("btn");
// const stop = document.getElementById("stop");
// const reset = document.getElementById("reset");
// const h1 = document.getElementById("h1");

// let count = 0;
// h1.innerText = count;
// let interval = "";

// incrementBtn.addEventListener("click", () => {
//   interval = setInterval(() => {
//     h1.innerText = ++count;
//   }, 500);
// });

// stop.addEventListener("click", () => {
//   clearInterval(interval);
// });

// reset.addEventListener("click", () => {
//   count = 0;
//   h1.innerText = count;
//   clearInterval(interval);
// });

//slider
const slider = document.getElementById("slider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const slides = [
  "./images/slide1.jpg",
  "./images/slide2.jpg",
  "./images/slide3.jpg",
  "./images/slide2.jpg",
];

let index = 0;

slider.style.backgroundImage = `url(${slides[index]})`;

const sliderFunc = () => {
  if (index < slides.length - 1) {
    index++;
  } else {
    index = 0;
  }

  slider.style.backgroundImage = `url(${slides[index]})`;
};

let mySlider = setInterval(sliderFunc, 3000);

slider.addEventListener("mouseenter", () => {
  clearInterval(mySlider);
});
slider.addEventListener("mouseleave", () => {
  mySlider = setInterval(sliderFunc, 3000);
});

// next prev

nextBtn.addEventListener("click", () => {
  if (index < slides.length - 1) {
    index++;
  } else {
    index = 0;
  }
  slider.style.backgroundImage = `url(${slides[index]})`;
  clearInterval(mySlider);
  mySlider = setInterval(sliderFunc, 3000);
});

prevBtn.addEventListener("click", () => {
    index !== 0 ? index-- : index = slides.length - 1

  slider.style.backgroundImage = `url(${slides[index]})`;
  clearInterval(mySlider);
  mySlider = setInterval(sliderFunc, 3000);
});
