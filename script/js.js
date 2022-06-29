
const apiButton = document.getElementById('apiButton');

const objetos = function (numberOfpokes){
    let  pokemons = {numberOfpokes};
    let types;
    for(let i =1 ;i<=numberOfpokes;i++){
        const link = `https://pokeapi.co/api/v2/pokemon/${i}`;
        fetch(link)
        .then(res =>res.json())
        .then(data =>{
            pokemons[i-1]   = data;
            // console.log(data.types.length)
            let parragraf = document.getElementById('content');
            parragraf.innerHTML += ` 
                <div class="pokemon">
                    <h1 class="pokemon__nombre">${data.name}</h1>
                    <div class="pokemon__img" style="background-image:url('${data.sprites.front_default}');">
                    </div>
                    <h2 class="pokemon__numero">N#: ${data.order}</h2>
                    <div class="pokemon__descripcion grid">
                        <div class="pokemon__descripcion__type" style="border: 1px solid black;">${data.types[0].type.name}</div>                      
                    </div>
                </div>`;
        }); 
    }
    // return console.log(data.types.length);
};


apiButton.addEventListener('click', () => {
   let objects = objetos(500); 

});



// const objetos = () => {
//     const link = 'https://pokeapi.co/api/v2/pokemon?limit=500&offset=0';
//     fetch(link)
//     .then(res =>res.json())
//     .then(data =>{

//         console.log(data);

//         // let parragraf = document.getElementById('content');
//         // parragraf.innerHTML = `<p>${data.name}</p>`;
//     }); 

// }   

// apiButton.addEventListener('click', objetos);


