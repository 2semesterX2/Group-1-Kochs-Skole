var windowHeight = window.innerHeight;

var blooperContainer = document.querySelector('.blooper-reel');
var blooperContainerOffset = blooperContainer.offsetTop;
var blooperContainerHeight = window.getComputedStyle(blooperContainer).getPropertyValue('height');

var blooperReel = document.getElementById("myVideo");

var overlay = document.querySelector('.overlay-color');
var headings = Array.from(document.querySelectorAll('.overlay-text > *'));

var parallaxImage = document.querySelector('.parallax');


window.onscroll = function() {
    var offsetTop = blooperReel.getBoundingClientRect().top;
    var offsetBottom = blooperReel.getBoundingClientRect().bottom;
    
    if (offsetTop <= 50 && offsetTop > 0) {
       playVideo();
    } else if (offsetBottom < 0) {
        stopVideo();
    }
    
    animateImage();
    animateText();
}

function playVideo() {
    blooperReel.play();
    overlay.classList.add('show');
}

function stopVideo() {
    blooperReel.pause();
}

function animateText() {
    var percentage = (window.scrollY - blooperContainerOffset) / (parseInt(blooperContainerHeight) - windowHeight); //crazy math, dont edit
    
    headings.forEach(heading => {
        var start = heading.dataset.start;
        var end = heading.dataset.end;
        
        console.log(percentage);
        console.log(start);
        console.log(end);
        
        if (percentage < start) {
            displayValue = 'none';
        } else if (percentage > end) {
            displayValue = 'none';
        } else {
            displayValue = 'block';
            
        }
        
        heading.style["display"] = displayValue;
        
    });
}

//this is the image
function animateImage() {
    var offsetTop = parallaxImage.getBoundingClientRect().top;
    var percentage = offsetTop / windowHeight * 100;
    if (percentage < 20) percentage = 20;
    var translateValue = (percentage - 20) * 3;
    
    parallaxImage.style["transform"] = `translateX(${translateValue}%)`;
}

// automatic sound 
window.addEventListener("scroll",
 function(){
var mySound= document.getElementById("myaudio");
if(elFllVsbl(mySound.parentElement)) { // parent elementFullyVisible
if (!(mySound.currentTime>0)){ // test needed for preventing stuttering
mySound. play();
}
} else {
mySound.pause();
mySound.currentTime=0; // rewind sound
}
}
)

function elFllVsbl(el){
return (el.getBoundingClientRect().top>=0 &&
el.getBoundingClientRect().bottom<window.innerHeight)
}
