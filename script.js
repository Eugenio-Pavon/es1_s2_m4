let riga = document.querySelector(".riga");

let creaCard = function () {
  fetch("https://api.pexels.com/v1/search?query=people", {
    headers: {
      Authorization: "NSHfzc1kdhzFn7qKKLoH50N3plOk3nZ6hUBrNMwwvECZxqMuOjj8sBGe",
    },
  })
    .then((resp) => resp.json())
    .then((parametro) => {
      for (let i = 0; i < parametro.photos.length; i++) {
        let img = parametro.photos[i].src.medium;
        let titolo = parametro.photos[i].alt;

        riga.innerHTML += `
        <div class="card col-12 col-lg-3 col-md-6 col-sm-12" >
        <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
        
        <p class="card-text">${titolo}</p>
        
        </div>
        </div>
        `;
      }
    });
};

creaCard();
