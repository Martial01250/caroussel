// const div = document.querySelectorAll('div');

// div.forEach(item => {
//     item.style.outline = '4px yellow solid'
// })

let imgObject = [
  "./imgs/img1.jpg",
  "./imgs/img2.jpg",
  "./imgs/img3.jpg",
  "./imgs/img4.jpg",
  "./imgs/img5.jpg",
];

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

function imgChange(){
for (let i = 0; i < imgObject.length - 1; i++){
tileItem.style.background =  "url(" + imgObject[i] + ")";}
}

function loadGallery() {
  let mainView = document.getElementById("mainView");
  mainView.style.backgroundImage = "url(" + imgObject[mainImg] + ")";

  let leftView = document.getElementById("leftView");
  leftView.style.backgroundImage = "url(" + imgObject[prevImg] + ")";

  let rightView = document.getElementById("rightView");
  rightView.style.backgroundImage = "url(" + imgObject[nextImg] + ")";
}


function scrollRight() {
  prevImg = mainImg;
  mainImg = nextImg;
  if (nextImg >= imgObject.length - 1) {
    nextImg = 0;
  } else {
    nextImg++;
  }
    loadGallery();
}

function scrollLeft() {
  nextImg = mainImg;
  mainImg = prevImg;

  if (prevImg === 0) {
    prevImg = imgObject.length - 1;
  } else {
    prevImg--;
  }
 loadGallery();
}
loadGallery();
document.getElementById("buttonRight").addEventListener("click", scrollRight);
document.getElementById("buttonLeft").addEventListener("click", scrollLeft);
