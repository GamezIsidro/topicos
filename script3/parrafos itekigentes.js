const body= document.querySelector('body')

const texto= ["Qui", "esse", "irure", "velit", "nostrud", "cillum", "aliqua","nulla","ea" ,"irure","eiusmod", "exercitation", 
                "commodo","culpa","labore.","Officia","nostrud","in", "nisi","duis.", "Ut" ,"ad", "elit","in", "velit", "esse"]



function crearParrafo(){
    let contenedorTexto=""
    let numPalabras = Math.floor(Math.random()*(100-50)+50)
    for(let i=0;i<numPalabras;i++){

        contenedorTexto+=texto[Math.floor(Math.random()*(texto.length))]+" "
    
    }
    contenedorTexto+=". el parrafo tiene"+contenedorTexto.length + "caracteres."
    return contenedorTexto
}               
for(let i=0;i<5;i++){

    const parrafo =document.createElement('p')
    parrafo.textContent=crearParrafo()
   
    body.appendChild(parrafo)

}