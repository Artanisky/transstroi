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
  $('.offcanvas-collapse').toggleClass('open');
  $('.div-mask').toggleClass('show');
});
