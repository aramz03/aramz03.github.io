$(document).ready(function () {
  $('#result').load('page/index.html');
  $('.js-hover').mouseenter(function () {
    $(this).addClass('hover');
  }).mouseleave(function(){
    $(this).removeClass('hover');
  });
})