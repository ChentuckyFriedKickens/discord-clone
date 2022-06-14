//A script to animate all elements with a certain class

let targetName = '.animate'

import ScrollMagic from "scrollmagic";

$(document).ready(function() {

  let controller = new ScrollMagic.Controller();

  let targets = document.querySelectorAll(targetName);

  function Animate(element) {
    let scene = new ScrollMagic.Scene({
      triggerElement : element
    })
    .setClassToggle(element, 'show')
    .reverse(false)
    .addTo(controller);
  }
    
  Animate(targets[0]);
  Animate(targets[1]);
  Animate(targets[2]);
  Animate(targets[3]);  

  for (var i in targets.length) {
  }
})