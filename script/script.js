jQuery( function( $ ) {
    $( ".js-menu" ).on( "click", function() {
      if ($(".p-gmenu").hasClass("is-open")) {
        $(".p-gmenu").removeClass("is-open");
        $( ".c-button-menu" ).removeClass( "c-button-menu__is-open" );
        $( ".p-gmenu" ).fadeOut(300);}
      else {
        $( ".p-gmenu" ).addClass( "is-open" );
        $( ".c-button-menu" ).addClass( "c-button-menu__is-open" );
        $( ".p-gmenu" ).fadeIn(300);
      } 
    } );
} );