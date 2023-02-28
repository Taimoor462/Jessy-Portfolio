
let ulList = document.getElementById('ulList');
let lineOne = document.getElementById('lineOne');
let lineTwo = document.getElementById('lineTwo');
let lineThree = document.getElementById('lineThree');
let hamburger = document.getElementById('hamburger');

function toggle(){
    console.log('hello');

    ulList.classList.add('show-list');
    lineOne.classList.add('rotate');
    lineTwo.classList.add('display-n');
    lineThree.classList.add('rotate-top');
    hamburger.classList.add('content-display');
}

function closeNav(){
    console.log('helllllllo')
    ulList.classList.remove('show-list');
    lineOne.classList.remove('rotate');
    lineTwo.classList.remove('display-n');
    lineThree.classList.remove('rotate-top');
    hamburger.classList.remove('content-display');
}


let leftDot = document.getElementById('left-dot');
let rightDot = document.getElementById('right-dot');
let carouselWrapper =  document.getElementById('carousel-wrapper')

function moveLeft(){
    console.log('left clicked');
    leftDot.classList.add('active');
    rightDot.classList.remove('active');
    carouselWrapper.classList.add('move-right');
    carouselWrapper.classList.remove('move-left');
}

function moveRight(){
    console.log('right clicked');
    rightDot.classList.add('active');
    leftDot.classList.remove('active');
    carouselWrapper.classList.remove('move-right');
    carouselWrapper.classList.add('move-left');
}

// live counting

let valueDisplays = document.querySelectorAll('.num');
let interval = 2000;
let triggeredFlags = [false, false, false, false]; // using  flag array for each counter

window.addEventListener('scroll', function() {
  valueDisplays.forEach((valueDisplay, index) => {
    // Check if the element is in view
    let rect = valueDisplay.getBoundingClientRect();
    let isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
  
    if (isVisible && !triggeredFlags[index]) { // useonly   if flag is false
      triggeredFlags[index] = true; // set flag to true

      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute('data-val'));
      let duration = Math.floor(interval / endValue);

      function incrementValue() {
        startValue++;
        valueDisplay.textContent = startValue;

        if (startValue < endValue) {
          setTimeout(incrementValue, duration);
        }
      }

      incrementValue();
    }
  });
});


