
const apiButton = document.getElementById('apiButton');

const objetos = function (numberOfpokes){
    let  pokemons = {numberOfpokes};
    for(let i =1 ;i<501;i++){
        const link = `https://pokeapi.co/api/v2/pokemon/${i}`;
        fetch(link)
        .then(res =>res.json())
        .then(data =>{
            pokemons[i-1]   = data;
            let parragraf = document.getElementById('content');
            parragraf.innerHTML += `<p>${data.name}</p>`;
        }); 
    }
    return console.log(pokemons);
};


apiButton.addEventListener('click', () => {
   let objects = objetos(50); 

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