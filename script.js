const addressbtn = document.querySelector('#address-form')
const addressclose = document.querySelector('#address-close')
addressbtn.addEventListener("click", function() { 
   document.querySelector('.address-form').style.display = "flex"
//    document.querySelector('#address-form'); 
})
addressclose.addEventListener("click", function() { 
    document.querySelector('.address-form').style.display = "none"
})
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgNuber = document.querySelectorAll('.slider-content-left-top img') 
console.log(imgNuber.length)
let index=0;
rightbtn.addEventListener ("click", function() {
    index = index + 1
    if(index>imgNuber.length-1){
        index=0
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
})
leftbtn.addEventListener ("click", function() {
    // console.log("ok")
    index = index - 1
    if(index<=0){
        index=imgNuber.length-1
    }
    document.querySelector(".slider-content-left-top").style.right =  index * 100+"%"
})
const imgNuberLi = document.querySelectorAll('.slider-content-left-bottom li') 
imgNuberLi.forEach(function(image,index){
// console.log(image,index)

image.addEventListener("click", function(){
    removeactive()
    document.querySelector(".slider-content-left-top").style.right =  index * 100+"%"
    image.classList.add("active")
})
})
function removeactive(){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}
// -------------------//
function imgAuto() {
    index = index + 1
    if(index>imgNuber.length-1){
    index = 0
    }
    removeactive ()
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
    imgNuberLi[index].classList.add("active")
}
setInterval(imgAuto,5000)