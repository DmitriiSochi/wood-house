  let slideIndex = 1;
showSlides(slideIndex);

let prev = document.getElementById ('prev');
let next = document.getElementById ('next');

next.addEventListener ("click", function () {
  showSlides(slideIndex += 1);
  makeTimer();//Пересоздаем интервал если производится нажатие 
});

prev.addEventListener ("click", function () {
  showSlides(slideIndex -= 1);
  makeTimer();//Пересоздаем интервал если производится нажатие 
});

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
    let slides = document.getElementsByClassName("photo-aboutAs__wrap");
    let icos = document.querySelectorAll("div.photo-aboutAs__point > div >.photo-point__in");
    console.log(icos);
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }
 
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";    
  
    for (let ico of icos) {
        ico.classList.add('photo-point__in');
    } 
    icos[slideIndex].classList.add('photo-point__in-red');    
}
 var timer = 0;
 makeTimer(); //Создаем интервал 
 function makeTimer(){
    clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
    timer = setInterval(function(){
      slideIndex++;
      showSlides(slideIndex);
    },5000);
  }