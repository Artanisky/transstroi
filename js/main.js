if ($('input').is('#tel')) {
  $('#tel').inputmask("+7(999) 999-99-99");
}
if ($('section').is('.slide')) {
  $('.slide').slide({
    isAutoSlide: true,
    slideSpeed: 10000,
    isHoverShowArrow: false
  });
}
$('[data-toggle="offcanvas"]').on('click', function () {
  mobileMenu();
  $('body').css('overflow','hidden')
});
$('.div-mask').on('click', function(e) {
  mobileMenu();
  $('body').css('overflow','auto')
});
function mobileMenu() {
  $('.offcanvas-collapse').toggleClass('open');
  $('.div-mask').toggleClass('show');
}
