// NavBar---------------------------------
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("fixtNavbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Requst Form-------------------------
function showRequestForm() {
    var requestForm = document.getElementById("request-form");
    requestForm.style.display = "block";
  }

function closerRequestForm() {
    var requestForm = document.getElementById("request-form");
    requestForm.style.display = "none";

  }

// Mobile DropDown----------------------------

function showMoileMenuOne(){
    document.getElementById('mobileDropdownOne').classList.toggle("mobile-dropdown-show");
    document.getElementById('mobileMenuIconOne').classList.toggle("roted180geg");
}
function showMoileMenuTwo(){
    document.getElementById('mobileDropdownTwo').classList.toggle("mobile-dropdown-show");
    document.getElementById('mobileMenuIconTwo').classList.toggle("roted180geg");
}



function showFunction() {
    var showMenu = document.getElementById("showMenu");
    if (showMenu.style.display === "block") {
        showMenu.style.display = "none";
        showMenu.style.right = "-320px";
    } else {
        showMenu.style.display = "block";
        showMenu.style.right = "0";

    }
  }
//   Slider--------------------
  let sliderImageIndex = 0;
  showHeroSlider();

  function showHeroSlider(){
      let i;
      let sliderItem = document.getElementsByClassName("slider-item")
      let sliderNav = document.getElementsByClassName("sliderDot");
      for (i = 0; i < sliderItem.length; i++) {
          sliderItem[i].style.display = "none";  
      }
      sliderImageIndex++;
      if (sliderImageIndex > sliderItem.length) {sliderImageIndex = 1}    
      for (i = 0; i < sliderNav.length; i++) {
          sliderNav[i].className.replace("active", "");
      }

      sliderItem[sliderImageIndex-1].style.display = "block";  
      sliderNav[sliderImageIndex-1].className += " active";
      setTimeout(showHeroSlider, 3000); // Change image every 3 seconds
      
  }

//   Carusal Butn-----
const carousel = document.querySelector(".carousel-items"),
firstImg = carousel.querySelectorAll(".carousel-item")[0],
arrowIcons = document.querySelectorAll(".carousel-btn");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);


// Carusel 2--------------------

const carouselTwo = document.querySelector(".all-service"),
firstImgTwo = carouselTwo.querySelectorAll(".service-card")[0],
arrowIconsTwo = document.querySelectorAll(".carouselTwo-btn");

// let isDragStartTwo = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIconsTwo = () => {
    // showing and hiding prev/next icon according to carouselTwo scroll left value
    let scrollWidth = carouselTwo.scrollWidth - carouselTwo.clientWidth; // getting max scrollable width
    arrowIconsTwo[0].style.display = carouselTwo.scrollLeft == 0 ? "none" : "block";
    arrowIconsTwo[1].style.display = carouselTwo.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIconsTwo.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImgTwo.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carouselTwo scroll left else add to it
        carouselTwo.scrollLeft += icon.id == "leftTwo" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlideTwo = () => {
    // if there is no image left to scroll then return from here
    if(carouselTwo.scrollLeft - (carouselTwo.scrollWidth - carouselTwo.clientWidth) > -1 || carouselTwo.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImgTwo.clientWidth + 14;
    // getting difference value that needs to add or reduce from carouselTwo left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carouselTwo.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carouselTwo.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carouselTwo.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStartTwo = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carouselTwo.scrollLeft;
}

const draggingTwo = (e) => {
    // scrolling images/carouselTwo to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carouselTwo.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carouselTwo.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStopTwo = () => {
    isDragStart = false;
    carouselTwo.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carouselTwo.addEventListener("mousedown", dragStart);
carouselTwo.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carouselTwo.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carouselTwo.addEventListener("touchend", dragStop);

