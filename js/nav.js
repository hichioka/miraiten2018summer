(function($){

$(function(){
  $('.head_list::before .footer_list::before' ).hover(
    .each(function(){//マウスオーバー時の処理
      $(this).css('border-right':'1px solid #fff', 'content':'aiueo')
    })
    .find('head_list::before').hover(
       function(){
           $(this).stop().animate({'border-right' : '1px bold #fff'}, 500);
       },
       function(){
           $(this).stop().animate({'opacity' : '1'}, 1000);
       }
   );

  );

});

})(jQuery);
