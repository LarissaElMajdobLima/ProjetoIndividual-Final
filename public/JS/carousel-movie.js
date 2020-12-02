// Variável com valor = 0
// funcao criada
var slideIndex = 0;
showSlides();

// funcao chamada
function showSlides() {
  // // Variaveis que pegam esses elementos do html e var i 
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  // var i = 0 como estado inicial
  var i = 0
  // Condicao de repeticao com While (SE valor do i for menor do que a qtd de slides, o valor atual do i ganha display none, e soma 1 na variavel i)
  while (i < slides.length) {
    slides[i].style.display = "none";
    i++
  }
  // Soma 1 na variavel Index
  slideIndex++;

  // Condicao if(SE o valor de SlideIndex for maior do que a qtd de slides), SlideIndex passa a valer 1 - ciclo infinito de ida
  if (slideIndex > slides.length) { slideIndex = 1 }

  // var i = 0 
  i = 0
  // Condicao de repeticao com While (SE valor do i for menor do que a qtd de "dots", soma 1 na variavel i) - funcao replace = substitui "active" para "" 
  while (i < dots.length) {
    dots[i].className = dots[i].className.replace(" active", "");
    i++
  }

  // Parte responsável por "mostrar" o slide e o dot da imagem atual- (-1 porque foi utilizado o Array, que inicia a contagem no 0)
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Tempo de transicao entre os slides
}