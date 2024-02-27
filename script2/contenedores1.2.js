const body= document.querySelector('body')

const colores= ["red","purple","orange","black","silver","gray","white","maroon",
                "fuchsia","green","lime","olive","yellow","navy","blue", "teal","aqua",
                "aliceblue","brown","coral"]
const repetidos=colores.slice() 
for(let i=0;i<10;i++){

    const contenedor =document.createElement('div')
    contenedor.style.height='100px'
    let nuevoColor=[Math.floor(Math.random()*(repetidos.length))]
    contenedor.style.background=repetidos[nuevoColor]
    repetidos.splice(nuevoColor,1)
    body.appendChild(contenedor)

}