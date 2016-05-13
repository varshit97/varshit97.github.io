function animateHeading(jQuery){
  console.log('called');
  var id = '.wrapper';
  $(id).slideDown(3000);
  $('div.inside').html("varshit battu").slideDown();
}

$(document).ready(animateHeading);
