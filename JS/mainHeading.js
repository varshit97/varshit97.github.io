function animateHeading(jQuery){
  console.log('called');
  var id = '.wrapper';
  $(id).slideDown(3000);
  $('div.inside').html("Varshit Battu").slideDown();
}

$(document).ready(animateHeading);
