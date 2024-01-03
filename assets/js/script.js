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
  // Testimonial Modal-----------------
function showTestimonialForm() {
    var requestForm = document.getElementById("testimonial-modal");
    requestForm.style.display = "block";
  }

function closerTestimonialModal() {
    var requestForm = document.getElementById("testimonial-modal");
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
        let firstImgWidth = firstImg.clientWidth + 34; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

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
        let firstImgWidth = firstImgTwo.clientWidth + 34; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carouselTwo scroll left else add to it
        carouselTwo.scrollLeft += icon.id == "leftTwo" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});


// Testimonial Slider----------------------------
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("testimonial-card");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


// Latest Trend SLider---------------------------

const carouselThree = document.querySelector(".latest-trend-body"),
firstImgThree = carouselThree.querySelectorAll(".trend-card")[0],
arrowIconsThree = document.querySelectorAll(".carouselThree-btn");

// let isDragStartTwo = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIconsThree = () => {
    // showing and hiding prev/next icon according to carouselThree scroll left value
    let scrollWidth = carouselThree.scrollWidth - carouselThree.clientWidth; // getting max scrollable width
    arrowIconsThree[0].style.display = carouselThree.scrollLeft == 0 ? "none" : "block";
    arrowIconsThree[1].style.display = carouselThree.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIconsThree.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImgThree.clientWidth + 34; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carouselThree scroll left else add to it
        carouselThree.scrollLeft += icon.id == "leftThree" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});


// Gallery----------------
galleryFilterSection("all") // Execute the function and showGalleryImgage all gallery-items
function galleryFilterSection(c) {
  var x, i;
  x = document.getElementsByClassName("gallery-item");
  if (c == "all") c = "";
  // Add the "showGalleryImgage" class (display:block) to the filtered elements, and remove the "showGalleryImgage" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    galleryRemoveClass(x[i], "showGalleryImgage");
    if (x[i].className.indexOf(c) > -1) galleryAddClass(x[i], "showGalleryImgage");
  }
}

// showGalleryImgage filtered elements
function galleryAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function galleryRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add igmGalleryActive class to the current button (highlight it)
var gallerybtnalls = document.getElementById("gallerybtnalls");
var btnalls = gallerybtnalls.getElementsByClassName("btnall");
for (var i = 0; i < btnalls.length; i++) {
  btnalls[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("igmGalleryActive");
    current[0].className = current[0].className.replace(" igmGalleryActive", "");
    this.className += " igmGalleryActive";
  });
}