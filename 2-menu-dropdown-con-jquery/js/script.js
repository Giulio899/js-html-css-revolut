$(document).ready(function() {

  $('#sottomenu1').hover(function() {
    $('#sottomenu1 ul').removeClass('hidden');
  }, function() {
    $('#sottomenu1 ul').addClass('hidden');
  });

  $('#sottomenu2').hover(function() {
    $('#sottomenu2 ul').removeClass('hidden');
  }, function() {
    $('.navbar-right ul li ul').addClass('hidden');
  });

  $('#sottomenu3').hover(function() {
    $('#sottomenu3 ul').removeClass('hidden');
  }, function() {
    $('.navbar-right ul li ul').addClass('hidden');
  });

});
