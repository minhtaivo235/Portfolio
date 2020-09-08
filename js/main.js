document.addEventListener('DOMContentLoaded', function() {
    var slides = document.querySelectorAll('.slide__img--item');
    var autoSlideAnimate = setInterval(function() { AutoSlide(); }, 3000);

    function AutoSlide() {
        var locationSlide = 0;
        var presentSlideShow = document.querySelector('.slide__img--item.active');
        for (var i = 0; i < slides.length; i++) {
            if (slides[i] == presentSlideShow) {

                locationSlide = i + 1;
                break;
            }
        }

        if (locationSlide < (slides.length)) {
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
            }
            slides[locationSlide].classList.add('active');
        } else {
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
            }
            slides[0].classList.add('active');
        }
    }
})