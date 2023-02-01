function mostrarMenu($event){
   let menu = document.getElementById("menu")
   if(getComputedStyle(menu).display == "none"){
      menu.style.display = "flex" 
   }
   else{
      menu.style.display = "none"
   }

   event.preventDefault("")
   
}


$(document).ready(function(){

   let slideAtual = 1
   let listaSlides = ["banner-f1", "banner-cs", "banner-lol"]

   setInterval(mudarSlide, 4000)

   function mudarSlide(){
       //remover slide anterior
       if(slideAtual > 0){
           $("#carrossel").removeClass(listaSlides[slideAtual - 1])
       }else{
           $("#carrossel").removeClass(listaSlides[listaSlides.length - 1])
       }      
       

       //exibir slide atual
       $("#carrossel").addClass(listaSlides[slideAtual])

       //indicar qual slide atual
       console.log("Slide atual é", slideAtual)
       slideAtual ++

       if(slideAtual > listaSlides.length - 1){
           slideAtual = 0
       }

   }
}) 

function cadastrarNewsletter(){
   let email = document.getElementById("campo-email").value
   alert(email)
}