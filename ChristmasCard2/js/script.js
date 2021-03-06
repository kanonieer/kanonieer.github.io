var current = document.getElementById('coverMain');
var currentNav = document.getElementById('cover');
var audio = document.getElementById('background_audio');

document.getElementById('player').addEventListener('click', function (e)
{
    e = e || window.event;
    audio.muted = !audio.muted;
    e.preventDefault();
}, false);


$(document).ready(function(){
    $('#cover').click(function(){
        currentNav.style.width = "100%";
        currentNav = this;
        this.style.width = "110%";
        current.style.display = 'none';
        current = document.getElementById('coverMain');
        current.style.display = 'flex';
    });
    $('#wishes').click(function(){
        currentNav.style.width = "100%";
        currentNav = this;
        this.style.width = "110%";
        current.style.display = 'none';
        current = document.getElementById('wishesMain');
        current.style.display = 'flex';        
    });
    $('#forAnna').click(function(){
        currentNav.style.width = "100%";
        currentNav = this;
        this.style.width = "110%";
        current.style.display = 'none';
        current = document.getElementById('forAnnaMain');
        current.style.display = 'flex'; 
    });
    $('#forPiotr').click(function(){
        currentNav.style.width = "100%";
        currentNav = this;
        this.style.width = "110%";
        current.style.display = 'none';
        current = document.getElementById('forPiotrMain');
        current.style.display = 'flex'; 
    });
    $('#forAgata').click(function(){
        currentNav.style.width = "100%";
        currentNav = this;
        this.style.width = "110%";
        current.style.display = 'none';
        current = document.getElementById('forAgataMain');
        current.style.display = 'flex'; 
    });
});