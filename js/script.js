const img = document.querySelectorAll('.header-slider ul img');
const prev_button = document.querySelector('.control-prev');
const next_button = document.querySelector('.control-next');

let n = 0;  

function slideImg() {
   for (let i = 0; i < img.length; i++) {
        img[i].style.display = 'none';
   }
   img[n].style.display = 'block'; 
}

slideImg();

next_button.addEventListener('click', function() {
    n = (n + 1) % img.length; 
    slideImg(); 
});

prev_button.addEventListener('click', function() {
    n = (n - 1 + img.length) % img.length;  
    slideImg(); 
});

const sliders = document.querySelectorAll('.product');

sliders.forEach((slider, index) => {
    slider.addEventListener('wheel', function(event) {
        // console.log(`Slider ${index + 1} wheel event triggered`); // Add this line
        event.preventDefault();
        slider.scrollLeft += event.deltaY;
    });
});
function changeText(element) {
    const colorName = element.querySelector('.colorName').innerHTML;
    document.querySelector('.selected-color-x').innerHTML = colorName;
}
