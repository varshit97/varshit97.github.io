function animateHeading(jQuery){
  var id = '.wrapper';
  $(id).effect("bounce", { times:5 }, 3000);
}

var marginLeft = $('.wrapper').css('margin-left');
marginLeft = marginLeft.replace('px','');
var width = $('.wrapper').css('width');
width = width.replace('px','');
var newLeft = parseInt(marginLeft) - (parseInt(width)/2);
$('.wrapper').css('margin-left', newLeft+'px');

$(document).ready(animateHeading);

$('.emoticon').emoticonize();
