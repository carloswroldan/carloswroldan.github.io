const slider = document.querySelector("#slider");
var sliderSection = document.querySelectorAll(".slider__section");
var sliderSectionLast=sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector(".slider__btn-left");
const btnRight = document.querySelector(".slider__btn-rigth"); 

slider.insertAdjacentElement("afterbegin",sliderSectionLast);

function proximaImagen (){
    var sliderSectionFirst= document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft="-200%";
    slider.style.transition="all .5s";

    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    slider.style.marginLeft="-100%";
}

btnRight.addEventListener("Click", ()=>{
    proximaImagen();
});