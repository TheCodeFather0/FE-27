// API -> Application Programming Interface
// abstraksiya
// http
// endpoint
// endpoint -> url

/*
    get,put(patch),post,delete
*/
// xhr,fetch,axios

// xml
// JSON ->
// const data = {
//     "ad":"Ramin",
//     "soyad":"Mammadzada"
// }

// promise
// fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     data.forEach(({name}) => {
//       document.body.innerHTML += `<h2>${name}</h2>`
//     });
//   });

// const url = "https://jsonplaceholder.typicode.com/users";

// const getData = async () => {
//   const res = await fetch(url);
//   const data = await res.json();

//   console.log(data);
// };

// getData();

// axios(url).then(({data}) => {
//     console.log(data);
// })

const url = "http://localhost:3000/users/";
const cards = document.getElementById("cards");
axios(url).then(({ data }) => {
  data.forEach(({ id, firstname, lastname }) => {
    cards.innerHTML += `<div class="card">
            <h3>${firstname}</h3>
            <p>${lastname}</p>
            <button class="delBtn" id=${id}>del</button>
        </div>`;
  });
  const delButtons = document.querySelectorAll(".delBtn");
  delButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.id
      axios.delete(url + id).then((res) => {
        alert('ugurla silindi')
        location.reload();
      })
    });
  });
});
