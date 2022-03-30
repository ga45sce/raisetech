jQuery( function( $ ) {
  var win = $(window).width();
  var tablet = 834; // ブレークポイント（px）タブレットサイズ
  var pc = 1920; // ブレークポイント（px）　PCサイズ
    $( ".js-menu" ).on( "click", function() {
      if ($(".p-gmenu").hasClass("p-gmenu__is-open")) {
        $( ".c-button-menu" ).removeClass( "c-button-menu__is-open" );
        $(".p-gmenu").removeClass("p-gmenu__is-open");
      }
      else {
        $( ".c-button-menu" ).addClass( "c-button-menu__is-open" );
        $( ".p-gmenu" ).addClass( "p-gmenu__is-open" );
      } 
    } );
} );

/* imgタグ変更用　一旦不要なのでコメントアウト
$(window).on('load resize',function () {                     // Windowサイズが変更された時
  var win = $(window).width();
  var tablet = 834; // ブレークポイント（px）タブレットサイズ
  var pc = 1920; // ブレークポイント（px）　PCサイズ
  if (win < tablet) {
    $('.p-article-top').children('img').attr('src', './img/phone_main.jpg');
    $('.p-article-map').children('img').attr('src', './img/phone_map.jpg');
  }
  if (win > tablet && win < pc) {
    $('.p-article-top').children('img').attr('src', './img/tablet_main.jpg');
    $('.p-article-map').children('img').attr('src', './img/tablet_map.jpg');
  }
  if (win > pc) {
    $('.p-article-top').children('img').attr('src', './img/pc_main.jpg');
    $('.p-article-map').children('img').attr('src', './img/pc_map.jpg');
  }
});
*/