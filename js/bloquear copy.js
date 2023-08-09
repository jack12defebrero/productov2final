//document.addEventListener("contextmenu", function(event){
 //   event.preventDefault();
//}, false);

//document.addEventListener("copy", function(event){
  // Mensaje si copian el texto pero en realidad le va copiar este texto "No se permite copiar en esta página web".
 // event.clipboardData.setData("text/plain", "No se permite copiar en esta página web");
  
  // Impedir la acción de copia por defecto
 // event.preventDefault();
//}, false);

// loader
window.addEventListener('load', () =>{
  const contenedor1_loader = document.querySelector ('.contenedor1_loader');
  contenedor1_loader.style.opacity = 0;
  contenedor1_loader.style.visibility = 'hidden';
});





//inicio de animaciones con aos

        AOS.init({
				easing: 'ease-out-back',
				duration: 1000
			});
  

      



