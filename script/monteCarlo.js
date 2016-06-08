var main = function(){
    $('.btn-default').on("click",function(){
        var range = $('#input').val();
        monteCarlo(range);
    });
};
var monteCarlo = function(e){
    var x, y;
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    for(var i = 0; i< e ; i++){
       x = getRandomInt(0,500);
       y = getRandomInt(0,500);
           
  
      if(x*x + y*y <= 250000){
          ctx.fillStyle = "#FF0000";
           ctx.fillRect(x,y,1,1);
      }
    }
};
var getRandomInt = function(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
$(document).ready(main);