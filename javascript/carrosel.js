// declara as variáveis
const carrosel = document.querySelector('.carrosel-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const carroselItems = document.querySelectorAll('.carrosel-item');
const numItems = carroselItems.length;
const itemsPerSlide = 1;
let index = 0;

// Adiciona função para os botões de mover para a esquerda e direita
prevButton.addEventListener('click', moveCarouselLeft);
nextButton.addEventListener('click', moveCarroselRight);

// Passa as imagens como slide para a direita
function moveCarroselRight(e) {
  const movement = 1;  
  index += movement * itemsPerSlide;
  if (index < 0) {
    index = numItems - itemsPerSlide;
  } else if (index >= numItems) {
    index = 0;
  }
  const transformPercentage = -(index * 100 / numItems);
  carrosel.style.transform = `translateX(${transformPercentage}%)`;
}


// Passa as imagens como slide para a esquerda
function moveCarouselLeft(e) {
    const movement = -1;
    index += movement * itemsPerSlide;
    if (index < 0) {
      index = numItems - itemsPerSlide;
    } else if (index >= numItems) {
      index -= numItems;
    }
    const transformPercentage = -(index * 100 / numItems);
    carrosel.style.transform = `translateX(${transformPercentage}%)`;
  }


