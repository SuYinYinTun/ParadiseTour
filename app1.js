$(document).ready(function(){
  
  $(window).scroll(function(){
    let xyz = $(this).scrollTop();
      // console.log(xyz)

      if(xyz >= 200){
       $(".navbar").addClass("navjs");
  }else{
     $(".navbar").removeClass("navjs")
  }
  });

  $(".propertieslists").click(function(){
   //console.log("hello mello");

   $(this).addClass("activeitems");
   $(this).siblings().removeClass("activeitems");


   let getvalue = $(this).attr("data-filter");
   
   if(getvalue === "all"){
      $(".filters").show("slide",1000);
   }else{
      $(".filters").hide('slide',500);
      $(".filters").not("."+getvalue).hide("slide",1000);
      $(".filters").filter("."+getvalue).show("slide",1000);
   }
  })

  lightbox.option({
      'resizeDuration': 400,
      'wrapAround': true,
      'maxWidth': 500
    });


  $(".heart").click(function(){
   if($(this).hasClass("activee")){
      $(this).removeClass("activee")
   }else if(!$(this).hasClass("activee")){ 
      $(this).addClass("activee")
   }
   
  })

  //  $(".heart").dblclick(function(){
  //  if($(this).hasClass("activee")){
  //     $(this).removeClass("activee")
  //  }else if(!$(this).hasClass("activee")){
  //     $(this).addClass("activee")
  //  }
   
  // })

  const getyear = $("#getyear");
  const fullyear = new Date().getFullYear();
  getyear.text(fullyear);


  $(window).scroll(function(){
   let abc = $(this).scrollTop();
  //  console.log(abc);

  if(abc >= 1300){
   $(".btn-backtops").fadeIn(1200)
  }else{
    $(".btn-backtops").fadeOut(1200)
  }
  })

  



})