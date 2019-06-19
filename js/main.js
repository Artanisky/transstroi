$(document).ready(function(){
  $('#tel').inputmask("+7(999) 999-99-99");
});
$('.slide').slide({
  isAutoSlide: true,
  slideSpeed: 10000,
  isHoverShowArrow: false
});
$('[data-toggle="offcanvas"]').on('click', function () {
  $('.offcanvas-collapse').toggleClass('open');
  $('.div-mask').toggleClass('show');
});
