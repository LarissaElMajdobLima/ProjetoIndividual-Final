// Variável com valor = 1
// Função que usa a variável
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous buttons
// Valor da variável modificada de acordo com a função
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  // Variavel que pega o elemento do html e var i 
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // ciclo infinito de ida e volta
  if (n > slides.length) {slideIndex = 1} // Condicao SE (o valor atual de n(slide) for maior que a qtd de slides, o valor volta pra 1, reiniciando o ciclo de ida)
  if (n < 1) {slideIndex = slides.length} // Condicao SE (o valor atual de n(slide) for menor do que 1(valor do Slide inicial), o valor de SlideIndex passa a ser o valor do último slide, reiniciando o clico de volta)

// Condicao de repeticao com for (inicia com 0, e enquanto i for menor do que a qtd de slides, soma 1 na variável i) - display none
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

// Parte responsável por "mostrar" o slide da imagem atual- (-1 porque foi utilizado o Array, que inicia a contagem no 0)
  slides[slideIndex-1].style.display = "block";
}

