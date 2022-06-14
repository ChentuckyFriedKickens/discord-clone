//A script to fade in all elements with a certain class upon reaching them on scroll

//Note: You must have the cdn link for scrollmagic at the end of the body and a jquery cdn in the end of the head in your html as well as a css class "show"

//Put the name of the variable/element you want to animate on scroll
let targetName = '.animate'
let reverse = false;

import ScrollMagic from "scrollmagic";

$(document).ready(function() {

  let controller = new ScrollMagic.Controller();

  let targets = document.querySelectorAll(targetName);

  function Animate(element) {
    let scene = new ScrollMagic.Scene({
      triggerElement : element
    })
    .setClassToggle(element, 'show')
    .reverse(reverse)
    .addTo(controller);
  }

  for (let i = 0; i < targets.length; i++) {
    Animate(targets[i])
  }
})