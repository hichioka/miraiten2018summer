(function($){

$(function() {
  var $win = $(window),
  $main = $('main'),
  $nav = $('nav'),
  navHeight = $nav.outerHeight(),
  footerHeight = $('footer').outerHeight(),
  docmentHeight = $(document).height(),
  navPos = $nav.offset().top,
  fixedClass = 'is-fixed',//navを固定するためのclass
  hideClass = 'is-hide';//navを隠すためのclass

  $win.on('load scroll', function() {
    var value = $(this).scrollTop(),//スクロールした分の高さを取得
    scrollPos = $win.height() + value;//windowsの高さ＋スクロールした分

    if ( value > navPos ) {
      if ( docmentHeight - scrollPos <= footerHeight ) {
        $nav.addClass(hideClass);
      } else {
        $nav.removeClass(hideClass);
      }
      $nav.addClass(fixedClass);
      $main.css('margin-top', navHeight);
    } else {
      $nav.removeClass(fixedClass);
      $main.css('margin-top', '0');
    }
  });
});

})(jQuery);
