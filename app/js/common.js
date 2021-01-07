$(function() {

    let owlIndexPics = $('.carouselIndexPics')
    owlIndexPics.owlCarousel({
        items: 1,
        loop: false,
        nav: false,
        dots: false,
        drag: false,
        mouseDrag: false,
        touchDrag: false,
    })

    let owlIndexText = $('.carouselIndexText')
    owlIndexText.owlCarousel({
        items: 1,
        loop: false,
        nav: false,
        dots: false,
        drag: false,
        mouseDrag: false,
        touchDrag: false,
    })


    $('.indexPage .sliderArrows-prev').click(function() {
        owlIndexPics.trigger('prev.owl.carousel');
        owlIndexText.trigger('prev.owl.carousel');
        // progresMainBarDec()
        progressingBar()
    })

    // Go to the previous item
    $('.indexPage .sliderArrows-next').click(function() {
        owlIndexPics.trigger('next.owl.carousel');
        owlIndexText.trigger('next.owl.carousel');
        // progresMainBarInc()
        progressingBar()
    })

    let carouselAboutText = $('.carouselAboutText')
    carouselAboutText.owlCarousel({
        items: 1,
        loop: false,
        nav: false,
        dots: false,
    })

    let carouselAboutPics = $('.carouselAboutPics')
    carouselAboutPics.owlCarousel({
        items: 1,
        loop: false,
        nav: false,
        dots: false,
    })

    $('.aboutPage .sliderArrows-prev').click(function() {
        carouselAboutText.trigger('prev.owl.carousel');
        carouselAboutPics.trigger('prev.owl.carousel');
        progressingBar()
    })
    $('.aboutPage .sliderArrows-next').click(function() {
        carouselAboutPics.trigger('next.owl.carousel');
        carouselAboutText.trigger('next.owl.carousel');
        progressingBar()
    })

    //progess bar
    let mainPageCasouselItems = document.querySelectorAll('.carouselPics .owl-item')
    let mainPageProgressLine = document.querySelector('.progressCarousel .progress-element-redLine')
    let itemsLength = mainPageCasouselItems.length

    function progressingBar() {

        for (let i = 0; i < itemsLength; i++) {
            if (mainPageCasouselItems[i].classList.contains('active')) {
                let initialWidth = 100 / itemsLength
                let nextWidth = initialWidth + (initialWidth * i) + '%'
                mainPageProgressLine.style.width = nextWidth
            }
        }
    }

    $('.carouselAboutTastes').owlCarousel({
        items: 1,
        loop: false,
        nav: false,
        dots: false,
    })

});