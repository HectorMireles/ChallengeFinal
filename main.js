// let compraJuego = document.getElementById('compraJuego')
let carreta = document.getElementById('carreta')
let boton = document.getElementById('boton')



const canasta = () => {
    // let e = e + 1;
    if (boton === 'click'){
        carreta.innerHTML = 0
    } else {
        carreta.innerHTML = 1
    }
}

boton.addEventListener('click', canasta)