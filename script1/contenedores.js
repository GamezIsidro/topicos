const body= document.querySelector('body')

const colores= ["red","purple","orange","black"]

for(let i=0;i<10;i++){

    const contenedor =document.createElement('div')
    contenedor.style.height='100px'
    contenedor.style.background=colores[Math.floor(Math.random()*(4-0))]
    body.appendChild(contenedor)

}


