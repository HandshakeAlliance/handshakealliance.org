// ------- Config ------- //

const mars = document.querySelector(".heroMars");
const marsSlide = document.querySelector(".heroMarsSlide");
const mission = document.querySelector(".missionContainerSlide");
let count = 0;

// ------ End Config ------ //

window.addEventListener('load', checkSize); //Check initial size on page load
window.addEventListener('resize', windowResized); //show/hide correct planet when window is resized

function checkSize() {
  window.addEventListener('scroll', () => {
    if(count < 1) {
      if(window.innerWidth > 1024 && window.scrollY >= 19) {
        marsSlide.classList.add("slideLeft"); //add animation to planet w/ text
        mars.style.display = "none"; //hide plain planet
        marsSlide.style.display = "inline"; //show planet w/ text
        mission.classList.add("slideIn"); //add animation to move the mission into frame
        count++; //add one to count to prevent more animations
      }
    }
  });
}

//This function is called every time the window is resized
//Checks for the breakpoint and styles accordingly
function windowResized() {
  if(window.innerWidth <= 1024) {
    mars.style.display = "inline"; //Show plain planet w/ no text
    marsSlide.style.display = "none"; //Hide planet with text
  } else if (count > 0 && window.innerWidth > 1024){
    //if animation has already run once and large screen...
    mars.style.display = "none"; //hide plain planet
    marsSlide.style.display = "inline"; //show planet with text
    marsSlide.classList.remove("slideLeft"); //prevent slide animation
  }
}
