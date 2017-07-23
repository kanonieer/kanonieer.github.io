window.addEventListener('load', function() {
    const buttonPL = document.querySelector("#buttonPL"),
    buttonEN = document.querySelector("#buttonEN"),
    aboutPL = document.querySelector("#aboutPL"),
    aboutEN = document.querySelector("#aboutEN"),
    images = document.querySelectorAll(".image-wrapper");

    function getNewHeight(elem) {
        var imageStyle = elem.currentStyle || window.getComputedStyle(elem, false),
        bgImageUrl = imageStyle.backgroundImage.slice(4, -1),
        img = new Image(),
        factor = 0,
        clientWidth = document.documentElement.clientWidth,
        newHeight = 0;

        img.src = bgImageUrl.substring(1,bgImageUrl.length-1);
        factor = 3*img.width/clientWidth;

        newHeight = img.height/factor;

        return newHeight;
    }

    images.forEach(image => image.style.height = getNewHeight(image));
    window.addEventListener("resize", function(){
        images.forEach(image => image.style.height = getNewHeight(image));   
    });


    buttonPL.addEventListener('click', function() {
        if (!buttonPL.classList.contains('selected')) {
            buttonPL.classList.add('selected');
            buttonEN.classList.remove('selected');

            aboutPL.classList.remove('disabled');
            aboutEN.classList.add('disabled');           
        }
    });

    buttonEN.addEventListener('click', function() {
        if (!buttonEN.classList.contains('selected')) {
            buttonEN.classList.add('selected');
            buttonPL.classList.remove('selected');

            aboutEN.classList.remove('disabled');
            aboutPL.classList.add('disabled');
        }
    });
});