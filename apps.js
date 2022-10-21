let request = new XMLHttpRequest();
request.open("GET", "https://fakestoreapi.com/products");
request.send();
request.addEventListener("load", function () {
  let response = JSON.parse(request.responseText);
  console.log(response);
  let html = "";
  for (let i = 0; i < response.length; i++) {
    console.log(response[i]);
    html += ` <div class="men">
        <section class="mens">
          <h2>${response[i].category}</h2>
        </section>
        <section class="details">
          <img src="${response[i].image}" alt class="image" />;
          <div>
          <p class="p1">${response[i].description.slice(0, 100)}</p>
            <p class="p2">$${response[i].price}</p>
            <p class="p1">${response[i].title}</p>
              <button class="btn1">add to cart</button>
          </div>
        </section>
      </div>`;
  }
  document.querySelector(".container").innerHTML = html;
});
