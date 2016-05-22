function animateHeading(jQuery){
  var id = '.wrapper';
  $(id).effect("bounce", { times:5 }, 3000);
}

$(document).ready(animateHeading);

$('.emoticon').emoticonize();
