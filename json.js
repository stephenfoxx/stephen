// // json is used to pass or store information to

// let obj = {
//   name: "mike",
//   age: 12,
//   color: "black",
// };

// let x = JSON.stringify(obj);
// document.write(JSON.parse(x));
// console.log(JSON.parse(x));

// let request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v3.1/all");
// request.send();
// request.addEventListener("load", function () {
// //   console.log(request.responseText);
//     let response = JSON.parse(request.responseText);
//     console.log(response);
//     for (let i = 0; i < response.length; i++){
//         console.log(response[i]);
//     }
  

// });
let request = new XMLHttpRequest()
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.addEventListener("load", function () {
  let response = JSON.parse(request.responseText);
  console.log(response);
  let html = "";
  for (let i = 0; i < response.length; i++) {
    console.log(response[i]);
    html += ` <div class="country">
        <section class="flag">
          <img src="${response[i].image}" alt class ="" />
        </section>
        <section class="details">
          <h2>${response[i].name.official}</h2>
          <div>
            <p>${response[i].population}</p>
            <p>${response[i].region}</p>
            <p>${response[i].capital}</p>
          </div>
        </section>
      </div>`;
  }
  document.querySelector(".container").innerHTML = html;
});