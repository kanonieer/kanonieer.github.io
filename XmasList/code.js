var audio = document.getElementById('background_audio');
var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');
var buttonDown = document.getElementById('arrow-down');
var buttonUp = document.getElementById('');
var count = 0;

document.getElementById('player').addEventListener('click', function (e)
{
    e = e || window.event;
    audio.muted = !audio.muted;
    e.preventDefault();
}, false);

$(document).ready(function(){
    $("#arrow-down").click(function(){
        if(count == 0){
            $("#first").show(3000);
            count++;
        }else{
            if(count == 1){
                $("#second").show(3000);
                count++;
             }else{
                 $("#third").show(3000);
                 $("#arrow-down").hide();
                 $("#arrow-up").show();
            }
        }
    });
    $("#arrow-up").click(function(){
        $("#third").hide(1000, function(){
            $("#second").hide(1000, function(){
                $("#first").hide(1000);
                count = 0;
                $("#arrow-up").hide();
                $("#arrow-down").show();
            });
        });
    });
});