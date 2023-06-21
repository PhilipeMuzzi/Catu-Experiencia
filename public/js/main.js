const ham = document.querySelector('.ham-menu')
const nav = document.querySelector('.navbar')

ham.addEventListener("click",()=>{
    ham.classList.toggle('active')
    nav.classList.toggle('active')
})



var slideshows = document.querySelectorAll('[data-component="slideshow"]');
  
  // Aplica a todas as apresentações de slides 
  slideshows.forEach(initSlideShow);

  function initSlideShow(slideshow) {

    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Obter um array de slides

    var index = 0, time = 5000;
    slides[index].classList.add('active');  
    
    setInterval( () => {
      slides[index].classList.remove('active');
      
      //Passar por cada slide com índice
      index++;
      
      // Ao passar por todos os slides reinicia o índice para exibir o primeiro slide e inicia novamente
      if (index === slides.length) index = 0; 
      
      slides[index].classList.add('active');

    }, time);
  }