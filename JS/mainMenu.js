var active1 = false;
var active2 = false;
var active3 = false;
var active4 = false;
var active5 = false;
var active6 = false;

function animateMenu(jQuery) {
  if (!active1) {
   $('.parent2').find('.test1').css({
     'background-color': 'gray',
     'transform': 'translate(0px,125px)'
   });
  }
  else {
   $('.parent2').find('.test1').css({
     'background-color': 'dimGray',
     'transform': 'none'
   });
  }
  if (!active2) {
   $('.parent2').find('.test2').css({
     'background-color': 'gray',
     'transform': 'translate(60px,105px)'
   });
  }
  else {
   $('.parent2').find('.test2').css({
     'background-color': 'darkGray',
     'transform': 'none'
   });
  }
  if (!active3) {
   $('.parent2').find('.test3').css({
     'background-color': 'gray',
     'transform': 'translate(105px,60px)'
   });
  }
  else {
   $('.parent2').find('.test3').css({
     'background-color': 'silver',
     'transform': 'none'
   });
  }
  if (!active4) {
   $('.parent2').find('.test4').css({
     'background-color': 'gray',
     'transform': 'translate(125px,0px)'
   });
  }
  else {
   $('.parent2').find('.test4').css({
     'background-color': 'silver',
     'transform': 'none'
   });
  }
  if (!active5) {
   $('.parent2').find('.test5').css({
     'background-color': 'gray',
     'transform': 'translate(110px,-65px)'
   });
  }
  else {
   $('.parent2').find('.test5').css({
     'background-color': 'silver',
     'transform': 'none'
   });
  }
  if (!active6) {
   $('.parent2').find('.test6').css({
     'background-color': 'gray',
     'transform': 'translate(-60px,110px)'
   });
  }
  else {
   $('.parent2').find('.test6').css({
     'background-color': 'darkGray',
     'transform': 'none'
   });
  }
  active1 = !active1;
  active2 = !active2;
  active3 = !active3;
  active4 = !active4;
  active5 = !active5;
  active6 = !active6;
}

function activateMenu(jQuery) {
  $('.mask2').on('mousedown touchstart',animateMenu);
}

$(document).ready(activateMenu);
