// let compraJuego = document.getElementById('compraJuego')
let carreta = document.getElementById('carreta')
let boton = document.getElementById('boton')
let boton1 = document.getElementById('boton1')
let boton2 = document.getElementById('boton2')
let boton3 = document.getElementById('boton3')
let boton4 = document.getElementById('boton4')
let comprar = document.getElementById('comprar')
let nombre = document.getElementById("nombre")
let direccion = document.getElementById("direccion")
let telefono = document.getElementById('telefono')
let nuevoNom = document.getElementById('nuevoNom')
let cambioD = document.getElementById('cambioD')
let cambioT = document.getElementById('cambioT')
let carta = document.getElementById('carta')
let datosCompra = document.getElementById('datosCompra')
let btn = document.getElementById('btn')
let num = 0

const canasta = () => {
    num = num + 1
    carreta.innerHTML = num
}

const cambio = () => {
    nuevoNom.innerHTML = 'Nombre: ' + nombre.value
    cambioD.innerHTML = 'Direccion: ' + direccion.value
    cambioT.innerHTML = 'Telefono: ' + telefono.value
    datosCompra.classList.remove('none')
    // carta.classList.remove('none')
}

const aceptar = () => {
    btn.addEventListener('click', cambio)
    carta.classList.remove('none')
}

boton.addEventListener('click', canasta)
boton1.addEventListener('click', canasta)
boton2.addEventListener('click', canasta)
boton3.addEventListener('click', canasta)
boton4.addEventListener('click', canasta)
comprar.addEventListener('click', cambio)
