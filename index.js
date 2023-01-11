window.onload = iniciar;


function iniciar() {

    let boton = document.getElementById("boton");
    boton.addEventListener('click', _ => {
            location.reload();


})

cargarFrase()

async function cargarUrl(url) {
    let response = await fetch(url);
    return response.json();
}

async function cargarFrase() {
    let json = await cargarUrl('https://api.chucknorris.io/jokes/random')
        let fraseChuck = json.value;
        console.log(fraseChuck);
    let frase = document.getElementById("frase").innerHTML = fraseChuck;
}


}
