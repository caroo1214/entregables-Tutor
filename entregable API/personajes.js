
let contenedor = document.getElementById("contenedorPersonajes");


fetch("https://rickandmortyapi.com/api/character")
.then(resp => resp.json())
.then(data =>{ console.log(data);
     data.results.forEach(personaje => {
        contenedor.innerHTML += ` <div class="personajes">
                                  
                                  <h1> ${personaje.name} </h1> 
                                  <img class="personaje-img" src= "${personaje.image}">
                                  <h4> ${personaje.status} </h4>
                                  <h4> ${personaje.species} </h4>
                                  <h4> ${personaje.location} </h4>
                                  <h4> ${personaje.genero} </h4>
                                  </div>`;
  })
})
.catch(err => console.log(err))

