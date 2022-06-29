
const apiButton = document.getElementById('apiButton');

let pokemons = [500];

const callAPI =() =>{
    for(let i =1 ;i<501;i++){
        const link = `https://pokeapi.co/api/v2/pokemon/${i}`;
        fetch(link)
        .then(res =>res.json())
        .then(data =>{
            pokemons[i-1] = data;

            let parragraf = document.getElementById('content');
            parragraf.innerHTML = `<p>${data.name}</p>`;
        }); 
    }
    console.log(pokemons);
};



apiButton.addEventListener('click', callAPI);