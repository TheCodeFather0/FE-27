/*
    get
    delete
    post
    put(patch)


*/
const url = "http://localhost:3000/users/";
const cardsContainer = document.getElementById("cards");

//get and delete
axios(url).then(({ data }) => {
  data.forEach(({ id, age, firstName, lastName, photo }) => {
    cardsContainer.innerHTML += `<div class="card">
        <p>${firstName}</p>
        <p>${lastName}</p>
        <p>${age}</p>
        <img
          src="${photo}"
        />
        <div>
          <button class="deleteBtn" onclick="deleteuser()" id="${id}">del</button>
          <button class="editBtn" id="${id}">edit</button>
        </div>
      </div>`;

    // const deleteButtons = document.querySelectorAll(".deleteBtn");
    // deleteButtons.forEach((btn) => {
    //   btn.addEventListener("click", (e) => {
    //     const isAgree = confirm("brat are you ok?");
    //     const id = e.target.id;
    //     if (isAgree) {
    //       axios.delete(url + id).then((res) => {
    //         if (res.statusText === "OK") {
    //           alert("ugurla silindi");
    //           location.reload();
    //         }
    //       });
    //     }
    //   });
    // });

    const editButtons = document.querySelectorAll(".editBtn");
    editButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.target.id;
        axios(url + id).then(({ data }) => {
          const newFirtstName = prompt("yeni adi daxil edin", data.firstName);
        //   const newLastName = prompt("yeni soyadi daxil edin", data.lastName);
        //   const newPhoto = prompt("yeni sekili daxil edin", data.photo);
        //   const newAge = prompt("yeni yasi daxil edin", data.age);
          const newData = {
            admin: false
          };
          axios.patch(url + id,newData).then((res) => {
            if (res.statusText === 'OK') {
                alert('ugurla deyisdirildi')
                location.reload();
            }
          })
        });
      });
    });
  });
});

//post
const form = document.getElementById("form");
const firtNameInp = document.getElementById("firtName");
const lastNameInp = document.getElementById("lastName");
const photoInp = document.getElementById("photo");
const ageInp = document.getElementById("age");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    firstName: firtNameInp.value,
    lastName: lastNameInp.value,
    age: ageInp.value,
    photo: photoInp.value,
  };
  axios.post(url, data).then((res) => {
    if (res.statusText === "Created") {
      alert("ugurla elave edildi");
      location.reload();
    }
  });
});



/*
    Task -> todolist
    1. JSON-SERVER data hazirlayin
    data [ {id,todo,isdone} ]
    
    2.datalari goreceyik,lakin yanlarinda delete ve edit duyemeleri ve todo elave ede bilmeyimiz ucun section olmalidir- table istifade ede bilersiniz.
    3. ui yazdiqdan sonra edit,delete ve post hisselerini isleyin.
    4. isdone islemelidir,done ve undone ede bilmeliyik.
*/

