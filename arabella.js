$(window).scroll(function() {
   var wScroll = $(this).scrollTop(); 
   
   
   if( wScroll > $('.description').offset().top - 450) {
        $('.description h3').addClass('muncul');
        $('.description h1').addClass('muncul');
        $('.description .teks').addClass('muncul');
   }

   if( wScroll > $('.rooms').offset().top - 400 ) {
      $('.rooms h1').addClass('muncul');
      $('.title-rooms p').addClass('muncul');
   }

   if(wScroll > $('.garis-atas').offset().top - 460) {
      $('.sRoom h2').addClass('muncul');
   }
   if(wScroll > $('.garis-atas').offset().top - 420) {
      $('.sRoom p').addClass('muncul');
   }
   if(wScroll > $('.dRoom').offset().top - 460) {
      $('.dRoom h2').addClass('muncul');
   }
   if(wScroll > $('.dRoom').offset().top - 420) {
      $('.dRoom p').addClass('muncul');
   }
   if(wScroll > $('.fSuite').offset().top - 460) {
      $('.fSuite h2').addClass('muncul');
   }
   if(wScroll > $('.fSuite').offset().top - 420) {
      $('.fSuite p').addClass('muncul');
   }
   if(wScroll > $('.jSuite').offset().top - 460) {
      $('.jSuite h2').addClass('muncul');
   }
   if(wScroll > $('.jSuite').offset().top - 420) {
      $('.jSuite p').addClass('muncul');
   }
   if(wScroll > $('.pSuite').offset().top - 460) {
      $('.pSuite h2').addClass('muncul');
   }
   if(wScroll > $('.pSuite').offset().top - 420) {
      $('.pSuite p').addClass('muncul');
   }
   if(wScroll > $('.title-facilities').offset().top - 420) {
      $('.title-facilities h1').addClass('muncul');
   }
   if(wScroll > $('.title-facilities').offset().top - 420) {
      $('.title-facilities p').addClass('muncul');
   }
   if(wScroll > $('.photo').offset().top -420) {
      $('.photo h1').addClass('muncul');
      $('.photo p').addClass('muncul');
   }
});