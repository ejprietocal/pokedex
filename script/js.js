
function downloadData(numberOfpokes){
    let pokemons = [numberOfpokes];
    for(let i =1 ;i<=numberOfpokes;i++){
        const link = `https://pokeapi.co/api/v2/pokemon/${i}`;
        fetch(link)
        .then(resultado => resultado.json())
        .then(json =>{
            pokemons[i-1]= json;
            let parragraf = document.getElementById('content');
            parragraf.innerHTML += ` 
                <div class="pokemon hvr-grow">
                    <h1 class="pokemon__nombre">${json.name}</h1>
                    <div class="pokemon__img" style="background-image:url('${json.sprites.front_default}')" 
                    onclick="list('${json.name}','${json.sprites.front_default}','${json.order}','${json.abilities[0].ability.name}','${json.stats}','${json.types[0].type.name}')" ></div>
                    <h2 class="pokemon__numero">N#: ${json.order}</h2>
                    <div class="pokemon__descripcion grid">
                        <div class="pokemon__descripcion__type hvr-radial-in">${json.types[0].type.name}</div>
                    </div>
                </div>`;
        });
    }
    return pokemons;
}

const pokes = downloadData(400);
console.log(pokes);



document.getElementById('conten-flex').addEventListener('click',function showIn(){
    document.getElementById('conten-flex').style.setProperty('display','none');
});

function list(name,image,order,abilities,stats,nature){
    let element = document.getElementById('conten-flex');
    // element.classList.add('animate__bounceIn');
    element.style.setProperty('display','flex');
    let contecthtml = document.getElementById('caracteristicas').innerHTML =`
            <div class="caracteristicas__container grid animate__animated animate__bounceIn">
            <div class="pokemon pokemon--caracteristicas">
                <h1 class="pokemon__nombre">${name}</h1>
                <div class="pokemon__img" style="background-image:url('${image}')">
                </div>
                <h2 class="pokemon__numero">N#:${order}</h2>
                <div class="pokemon__descripcion grid">
                    <div class="pokemon__descripcion__type" style="border: 1px solid black;">${nature}</div>
                </div>
            </div>
            <div class="caracteristicas__generales grid"">
                <div class="caracteristicas__generales__especificas">
                    <h1 class="skills">Habilidades</h1>
                    <ul>
                        <li>${abilities}</li>
                        <li>${abilities}</li>
                    </ul>
                </div>
                <div class="caracteristicas__generales__especificas">
                    <h1 class="skills">Estadisticas</h1>
                    <ul>
                        <li>${stats[0].base_stat}</li>
                        <li>${stats[1].base_stat}</li>
                        <li>${stats[2].base_stat}</li>
                        <li>${stats[3].base_stat}</li>
                        <li>${stats[4].base_stat}</li>
                        <li>${stats[5].base_stat}</li>
                    </ul>
                </div>
                
            </div>
        </div>`
}

            

    