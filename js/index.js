// Nav
const navLinks = document.querySelector('.nav')

navLinks.addEventListener("mouseover", function( event ) {   
  event.target.style.color = "orange";
  setTimeout(function() {
    event.target.style.color = "";
  }, 1000);
}, false);




// First image
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 5);
    images.style.transform = `scale(${scale})`;
  }
  let scale = 1;
  const images = document.querySelector('img');
  images.onwheel = zoom;

images.addEventListener('wheel', zoom);




// section titles
// highlights each section title blue when hovered then permanently turns to red unless refreshed
const sectionTitle = document.querySelector('h2')

sectionTitle.addEventListener("mouseover", function( event ) {   
  event.target.style.color = "blue";
  setTimeout(function() {
    event.target.style.color = "red";
  }, 500);
}, false);

const sectionTitle1 = document.querySelector('.text-content h2')

sectionTitle1.addEventListener("mouseover", function( event ) {   
  event.target.style.color = "blue";
  setTimeout(function() {
    event.target.style.color = "red";
  }, 500);
}, false);

const sectionTitle2 = document.getElementsByTagName('h2')

sectionTitle2[2].addEventListener("mouseover", function( event ) {   
  event.target.style.color = "blue";
  setTimeout(function() {
    event.target.style.color = "red";
  }, 500);
}, false);

const sectionTitle3 = document.querySelector('.content-destination h2')

sectionTitle3.addEventListener("mouseover", function( event ) {   
  event.target.style.color = "blue";
  setTimeout(function() {
    event.target.style.color = "red";
  }, 500);
}, false);




// mid images
const imagesMid = document.querySelector('.img-content img')

imagesMid.addEventListener('mouseover', function (event) {
    imagesMid.style.border = '5px dotted orange';
  });
  
  imagesMid.addEventListener('mouseleave', e => {
    imagesMid.style.border = '3px solid #333';
  });

const imagesMid1 = document.getElementsByTagName('img')

imagesMid1[2].addEventListener('mouseover', function (event) {
    imagesMid1[2].style.border = '5px dotted orange';
  });
    imagesMid1[2].addEventListener('mouseleave', e => {
      imagesMid1[2].style.border = '3px solid #333';
  });
  
  const imagesMid2 = document.querySelector('.content-destination img')

  imagesMid2.addEventListener('mouseover', function (event) {
      imagesMid2.style.border = '5px dotted orange';
    });
    
    imagesMid2.addEventListener('mouseleave', e => {
      imagesMid2.style.border = '3px solid #333';
    });




// mid new images
const newImage = document.getElementsByTagName('img')
newImage[1].src='https://images.freeimages.com/images/large-previews/975/map-1483450.jpg'

const newImage2 = document.getElementsByTagName('img')
newImage2[2].src='https://images.freeimages.com/images/large-previews/38a/beach-1361903.jpg'

const newImage3 = document.getElementsByTagName('img')
newImage3[3].src='https://images.freeimages.com/images/large-previews/d5b/waterfalls-iguazu-1250574.jpg'




// footer
const footer1 = document.querySelector('.destination h4')

footer1.addEventListener("mouseover", function( event ) {   
  event.target.style.color = "yellow";
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

const footer2 = document.getElementsByTagName('h4')

footer2[1].addEventListener("mouseover", function( event ) {   
  event.target.style.color = "yellow";
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

const footer3 = document.getElementsByTagName('h4')

footer3[2].addEventListener("mouseover", function( event ) {   
  event.target.style.color = "yellow";
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);