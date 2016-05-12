function animateHeading(jQuery){
  console.log('called');
  var id = '.wrapper';
  $(id).slideDown(4000);
}

$(document).ready(animateHeading);
