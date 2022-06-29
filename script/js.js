
const apiButton = document.getElementById('apiButton');

const objetos = async function (numberOfpokes){
    let  pokemons = {numberOfpokes};
    for(let i =1 ;i<=numberOfpokes;i++){
        const link = `https://pokeapi.co/api/v2/pokemon/${i}`;
        const rest = await fetch(link);
        const json = await rest.json();
        // .then(res =>res.json())
        // .then(data =>{
            pokemons[i-1]= json;
            let parragraf = document.getElementById('content');
            // console.log(pokemons);
            parragraf.innerHTML += ` 
                <div class="pokemon">
                    <h1 class="pokemon__nombre">${json.name}</h1>
                    <div class="pokemon__img" style="background-image:url('${json.sprites.front_default}')" 
                    onclick="list('${json.name}','${json.sprites.front_default}','${json.abilities}','${json.stats}')">
                    </div>
                    <h2 class="pokemon__numero">N#: ${json.order}</h2>
                    <div class="pokemon__descripcion grid" jsonName="${json.name} jsonImagen="${json.imagen}">
                        <div class="pokemon__descripcion__type" style="border: 1px solid black;">${json.types[0].type.name}</div>
                    </div>
                </div>               
                
                
                `;
    }
    // capturarDatos();
    return pokemons;
}
objetos(50);
// let documento = document.getElementsByClassName("pokemon");


// console.log(typeof documento);
function list(name,image,abilities,stats){
    console.log(`this is the name: ${name}\nthis is the image:${image}\nthesee are the skills: ${abilities}\nthesee are the stats: ${stats}`)
    // console.log('yupi')
}

// for (let i = 0;i< documento.length ;i++){
//     console.log('entro');
//     documento[i].addEventListener('click',consolelog);
//         // console.log(documento);
// }   




apiButton.addEventListener('click',function(){
            

});
    
    // variable.addEventListener('click',() => {
        //     console.log(this.name)
        // })

        // document.querySelector('.pokemon__img').addEventListener('click',() => {
        //     console.log(this.variable.name);
        // })
    
// function capturarDatos(nombre){
//     let name,imagen;
//     let data = this.document.querySelector('.pokemon__descripcion');
    
//     name = data.getAttribute("jsonName");
//     console.log(nombre);
    
// }
