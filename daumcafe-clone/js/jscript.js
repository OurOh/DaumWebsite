$(function(){
  $(".grid-fill").hover(function(){
    $(this).find(".subnav").stop().fadeToggle();
  });
  $(".hero-box a").hover(function(){
    $(".hero-box a").removeClass("active");
    $(this).addClass("active"); 
  });
 
  $(".btn-right").click(function(){
      fadeInOut();
  });

   setInterval(fadeInOut, 9000);

}); // /.jquery


let i = 0;
function fadeInOut(){
   $(".hero .hero-box:eq(0)").clone().appendTo('.hero');
   $(".hero .hero-box:eq(0)").remove();
   $('.hero .hero-box:eq(0)').addClass('act');     
   $('.hero .hero-box:eq(0) ul>li:first-child a').addClass("active");
}

function fadeInOut(){
  let ct = $(".hero-box").length;
  console.log(ct);
  $(".hero .her-box:eq("+(ct-1)+")").clone().prependTo('.hero');
  $(".hero .hero-box:eq("+ct+")").remove();
  $(".hero .hero-box").removerClass("act");
  $('.hero .hero-box:eq(0) ul>li:first-child a').addClass("active");
}