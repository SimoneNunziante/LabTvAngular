document.addEventListener("DOMContentLoaded", function(){
    const fila=document.querySelector(".contenitore-carosello")
    const frecciaSinistra=document.getElementById("freccia-sinistra")
    const frecciaDestra=document.getElementById("freccia-destra")
    //FINE PRIMA FILA FILM
    

    const filaTopRated=document.querySelector(".contenitore-carosello-topRated")
    const frecciaSinistraTopRated=document.getElementById("freccia-sinistra-topRated")
    const frecciaDestraTopRated=document.getElementById("freccia-destra-topRated")
    //FINE SECONDA FILA FILM

    const filaHorror=document.querySelector(".contenitore-carosello-horror")
    const frecciaSinistraHorror=document.getElementById("freccia-sinistra-horror")
    const frecciaDestraHorror=document.getElementById("freccia-destra-horror")
    //FINE TERZA FILA

    const filaCommedia=document.querySelector(".contenitore-carosello-commedia")
    const frecciaSinistraCommedia=document.getElementById("freccia-sinistra-commedia")
    const frecciaDestraCommedia=document.getElementById("freccia-destra-commedia")
    //FINE QUARTA FILA

    const filaAnimazione=document.querySelector(".contenitore-carosello-animazione")
    const frecciaSinistraAnimazione=document.getElementById("freccia-sinistra-animazione")
    const frecciaDestraAnimazione=document.getElementById("freccia-destra-animazione")
    //FINE QUINTA FILA

    const filaScroll=document.querySelector(".contenitore-carosello-scroll")
    const frecciaSinistraScroll=document.getElementById("freccia-sinistra-scroll")
    const frecciaDestraScroll=document.getElementById("freccia-destra-scroll")
    //FINE FILA SCROLL



    
    //EVENT PRIMA FILA
    //=================Event freccia-destra Prima Fila================

    frecciaDestra.addEventListener("click", ()=>{
        fila.scrollLeft+=fila.offsetWidth 
    })
    


    //===============Event freccia-sinistra Prima Fila================

    frecciaSinistra.addEventListener("click", ()=>{
        fila.scrollLeft-=fila.offsetWidth
    })
    //FINE EVENT PRIMA FILA
   



    //EVENT SECONDA FILA
    //=================Event freccia-destra Seconda Fila================

    frecciaDestraTopRated.addEventListener("click", ()=>{
        filaTopRated.scrollLeft+=filaTopRated.offsetWidth 
    })


    //===============Event freccia-sinistra Seconda Fila================

    frecciaSinistraTopRated.addEventListener("click", ()=>{
        filaTopRated.scrollLeft-=filaTopRated.offsetWidth
    })
    //FINE EVENT SECONDA FILA




    //EVENT TERZA FILA
    //=================Event freccia-destra Terza Fila================

    frecciaDestraHorror.addEventListener("click", ()=>{
        filaHorror.scrollLeft+=filaHorror.offsetWidth 
    })


    //===============Event freccia-sinistra Terza Fila================

    frecciaSinistraHorror.addEventListener("click", ()=>{
        filaHorror.scrollLeft-=filaHorror.offsetWidth
    })




    //EVENT QUARTA FILA
    //=================Event freccia-destra Quarta Fila================

    frecciaDestraCommedia.addEventListener("click", ()=>{
        filaCommedia.scrollLeft+=filaCommedia.offsetWidth 
    })


    //===============Event freccia-sinistra Quarta Fila================

    frecciaSinistraCommedia.addEventListener("click", ()=>{
        filaCommedia.scrollLeft-=filaCommedia.offsetWidth
    })
    



    //EVENT QUINTA FILA
    //=================Event freccia-destra Quinta Fila================

    frecciaDestraAnimazione.addEventListener("click", ()=>{
        filaAnimazione.scrollLeft+=filaAnimazione.offsetWidth 
    })


    //===============Event freccia-sinistra Quinta Fila================

    frecciaSinistraAnimazione.addEventListener("click", ()=>{
        filaAnimazione.scrollLeft-=filaAnimazione.offsetWidth
    })




    //EVENT SCROLL
    //=================Event freccia-destra Scroll================

    frecciaDestraScroll.addEventListener("click", ()=>{
        filaScroll.scrollLeft+=filaScroll.offsetWidth 
    })


    //===============Event freccia-sinistra Scroll================

    frecciaSinistraScroll.addEventListener("click", ()=>{
        filaScroll.scrollLeft-=filaScroll.offsetWidth
    })

})
