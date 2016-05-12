function animateHeading(jQuery){
  console.log('called');
  var id='#mainFrame';
  $(id).slideDown(4000);
}

$(document).ready(animateHeading);
