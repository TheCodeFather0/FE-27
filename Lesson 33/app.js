const modeBtn = document.getElementById("modeBtn");
const body = document.body;

modeBtn.addEventListener("click", (e) => {
  if (body.classList.contains("light")) {
    localStorage.setItem("mode", "dark");
    e.target.innerText = "🌞";
  } else {
    localStorage.setItem("mode", "light");
    e.target.innerText = "🌜";
  }
  modeChanger();
});

const modeChanger = () => {
  const mode = localStorage.getItem("mode") || "light";
  body.className = mode;
};
modeChanger();


// isleyecek   -> 2
// islemeyecek -> 3
