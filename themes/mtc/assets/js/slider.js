(function () {
    function slideShow(){
        var currentSlide = 0;
        var slides = document.getElementsByClassName('carousel-open');

        nextSlide();

        function nextSlide(){

            for(i = 0; i < slides.length; i++){
                slides[i].checked = false;
            }

            currentSlide++;

            if(currentSlide > slides.length) {currentSlide = 1}
            slides[currentSlide-1].checked = true;
            setTimeout(nextSlide, 10000);

        }
    }


  
    document.addEventListener("DOMContentLoaded", function () {
      slideShow();
    });
})();