// var elementIsClicked = false;
// var element = document.getElementById('myElement'); 
// element.addEventListener('click', clickHandler); 

//Count number of images inside a div
var carousel_img_holder = document.getElementById('carousel_img_holder');
var images = carousel_img_holder.getElementsByTagName('img');
var imageCount = images.length;
var currentImage = 0;

//Create nav dots
var carousel_nav_bar = document.getElementById('carousel_nav_bar');
var carousel_nav_right = document.getElementById('carousel_nav_right');
var carousel_nav_left = document.getElementById('carousel_nav_left');



function setNav(e){
    var num = e.target.id;

    if (num < 0) num = imageCount - 1;
    if (num >= imageCount) num = 0;

    var dots = document.getElementsByClassName('carousel_nav_dot');
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = "carousel_nav_dot";
        
        if (i == num) dot = dots[i].className = "carousel_nav_dot active";
    }

    currentImage = num;
    carousel_img_holder.style.left = -num * 100 + '%';
}


carousel_nav_right.addEventListener('click', () => setNav({target: {id: parseInt(currentImage) + 1 }}));
carousel_nav_left.addEventListener('click', () => setNav({target: {id: parseInt(currentImage) - 1}}));

for (var i = 0; i < imageCount; i++) {
    var dot = document.createElement('div');
    dot.className = "carousel_nav_dot";
    if (i == 0) dot.className = "carousel_nav_dot active";
    dot.id = i;
    carousel_nav_bar.appendChild(dot);
    dot.addEventListener('click', setNav); 
}

var faq1 = document.getElementById('faq1');
var faq2 = document.getElementById('faq2');
var faq3 = document.getElementById('faq3');
var faq4 = document.getElementById('faq4');

function changeImgState(state){
    var img = document.getElementById('faqIMG');
    img.src = "images/state " + state + ".png";
    var a = document.getElementById('faqa'+ state);
    //show the text of the faq
    a.style.display = "block";
    //hide the text of the other faqs
    for (var i = 1; i <= 4; i++) {
        if (i != state) {
            var b = document.getElementById('faqa'+ i);
            b.style.display = "none";
        }
    }
}

faq1.addEventListener("mouseenter", () => changeImgState(1));
faq2.addEventListener("mouseenter", () =>  changeImgState(2));
faq3.addEventListener("mouseenter",  () => changeImgState(3));
faq4.addEventListener("mouseenter",  () => changeImgState(4));
