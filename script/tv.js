var main = function(){
    var leftPanel = $('.left-panel');
    leftPanel.on('click',function(){
    leftPanel.animate({'marginTop':'-130px'},2000);
    setTimeout(function(){ leftPanel.hide(); },2000);  
    setTimeout(function(){ leftPanel.animate({'marginTop':'+130px'});},2000);
    setTimeout(function(){ leftPanel.show(); },3000); 
    setTimeout(function(){ leftPanel.animate({'marginTop':'0px'},2000);},3000);    
   // 
    });
};

$(document).ready(main);