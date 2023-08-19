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
const closebtn = document.querySelector('.close');
const modal = document.querySelector('#modal_preOrder');

popup.addEventListener('click', () =>{
  modal.style.display = 'block';
})

closebtn.addEventListener('click', () => {
    modal.style.display="none";

})
