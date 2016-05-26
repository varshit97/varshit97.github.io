function animateHeading(jQuery){
  var id = '.wrapper';
  $(id).effect("bounce", { times:5 }, 3000);
}

var marginLeft = $('.wrapper').css('margin-left');
marginLeft = marginLeft.replace('px','');
var width = $('.wrapper').css('width');
width = width.replace('px','');
var newLeft = parseInt(marginLeft) - (parseInt(width)/2);
$('.wrapper').css('margin-left', newLeft + 'px');

//For the mainDiv
var left = $('.stitched').css('left');
left = left.replace('px','');
var width = $('.stitched').css('width');
width = width.replace('px','');
var newLeft = parseInt(left) - (parseInt(width)/2);
$('.stitched').css('left', newLeft + 'px');

//For the mainImage
var marginLeft1 = $('.box').css('margin-left');
marginLeft1 = marginLeft1.replace('px','');
var width = $('.box').css('width');
width = width.replace('px','');
var newLeft1 = parseInt(marginLeft1) - (parseInt(width)/2);
$('.box').css('margin-left', newLeft1 + 'px');

var bottom = $('.box').css('bottom');
bottom = bottom.replace('px','');
var height = $('.box').css('width');
height = height.replace('px','');
var newBottom = parseInt(bottom) - (parseInt(height)/2);
$('.box').css('bottom', newBottom + 'px');

$(document).ready(animateHeading);

$('.emoticon').emoticonize();
