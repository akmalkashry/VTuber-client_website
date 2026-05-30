const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Krisen Mirai?", "Kristen?", "Murai?", "Kirisen Mirai?"];
const typingDelay = 160;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

/*TRASH DISLIKE*/
$(function () {
  $(".good").draggable();
  
  $(".trashCan2").hover(
    function () {
      // On hover, change the image source to 'sources/likefries.png'
      $(this).find('img').attr('src', 'sources/krisenPOP.png');
      // Play the hover sound
      document.getElementById('hoverSound').play();
    },
    function () {
      // On hover out, revert the image source to 'sources/likerie.png'
      $(this).find('img').attr('src', 'sources/krisennoPOP.png');
    }
  );

  $(".trashCan").droppable({
    activeClass: "ui-state-active",
    hoverClass: "trashCanHover",
    accept: ".good",
    drop: function (event, ui) {
      ui.draggable.fadeOut(function () {
        ui.draggable.remove();
        // Play the drop sound when the draggable is dropped into the trash can
        document.getElementById('dropSound').play();
      });
    },
    over: function (event, ui) {
      // Play the hover sound when the mouse enters the trash can area
      document.getElementById('hoverSound').play();
      $(this).addClass("trashCanHover");
    },
    out: function (event, ui) {
      // Remove the class when the mouse leaves the trash can area
      $(this).removeClass("trashCanHover");
    }
  });
});

window.addEventListener("load", function(){
  setTimeout(
      function open(event){
          document.querySelector(".popup").style.display = "block";
      },
      1000
  )
});

document.querySelector("#closes").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";
});


