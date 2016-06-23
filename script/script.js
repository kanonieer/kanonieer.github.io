var count = 0;
var main = function(){
    $('.btn-default').on("click",function(){
        var range = $('#input').val();
        if(range > 1000000){
            window.alert('Ilość prób powyżej miliona jest nie wskazana!');
        }else{
            if(range == ''){
                 window.alert('Nie podano ilości prób');           
            }else{
                    monteCarlo(range);
            }
        }

    });
};

var printPixel = function(e){
        var x, y;
        x = getRandomInt(0,500);
        y = getRandomInt(0,500);
        

        if(x*x + y*y <= 250000){
          e.fillStyle = "#FF0000";
           //setTimeout(function() {  ctx.fillRect(x,y,10,10); }, 100);
          e.fillRect(x,y,1,1);
          count++;
      }else{
          e.fillStyle = "#AAECCA";
           //setTimeout(function() {  ctx.fillRect(x,y,10,10); }, 100);
          e.fillRect(x,y,1,1);
      }
}
var monteCarlo = function(e){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0; i< e ; i++){
       printPixel(ctx);      
    }
    var  PI = 4*count/e;
    var text = "Wynik: "+ PI;
    document.getElementById("my-answer").innerHTML = text; 
    count = 0;
};
var getRandomInt = function(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
$(document).ready(main);