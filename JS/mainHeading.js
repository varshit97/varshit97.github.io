function animateHeading(jQuery){
  var id = '.wrapper';
  $(id).slideDown(3000);
  $('div.inside').html("varshit battu").slideDown();
}

$(document).ready(animateHeading);

$('.emoticon').emoticonize();
