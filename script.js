$("button").dblclick(function() { 
$(".img1").fadeOut();
$(".treasure").fadeIn();
$("button").fadeOut();
$("body").css("background-color","lightblue");
$(".button2").fadeIn();
});
$(".treasure").hover(function() { 
$(".seba").fadeIn(); 
$(".treasure").fadeOut();
$(".button2").fadeOut();
});    
