const imgContent = document.querySelectorAll('.img-content-hover');

function showImgContent(e) {
  for(var i = 0; i < imgContent.length; i++) {
    x = e.pageX;
    y = e.pageY;
    imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
};

document.addEventListener('mousemove', showImgContent);


// Modal pro-detail
const popup = document.querySelector('#popup_preOrder');
const closebtn = document.querySelector('.close_modal');
const body = document.querySelector('body');
const modal = document.querySelector('#modal_preOrder');

popup.addEventListener('click', () =>{
  modal.style.display = 'block';
  modal.style.transition = "0.5s all linear"
  body.style.background = "#00000050"
  body.style.transition = "0.5s all linear"
})

closebtn.addEventListener('click', () => {
  modal.style.display="none";
  body.style.background = "#fff"
  body.style.transition = "0.5s all linear"

})
