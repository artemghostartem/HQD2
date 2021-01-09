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

    let carouselAboutPicsMob = $('.carouselAboutPicsMob')
    carouselAboutPicsMob.owlCarousel({
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

    let tastys = document.querySelectorAll('.progress-element-stage-button')
    let tastyBlocs = document.querySelectorAll('.tastes-main-slider')
    // console.log(tastyBlocs)

    for (let i = 0; i < tastys.length; i++) {
        tastys[i].addEventListener('click', function() {
            for (let i = 0; i < tastys.length; i++) {
                tastys[i].classList.remove('active')
            }
            for (let i = 0; i < tastyBlocs.length; i++) {
                tastyBlocs[i].classList.remove('active')
            }
            tastyBlocs[i].classList.add('active');
            tastys[i].classList.add('active');
        })
    }

   

   //MAP
           // map functions
        let mapsInfos = document.querySelectorAll('.map-main-text-element ')
        let locations = [
            { latlng: [50.44985163771838, 30.533027825622177] },
            { latlng: [50.40621845995658, 30.516205012603958] },
            { latlng: [55.77201276709127, 37.4939230984154] },
        ];

        let iconDefault = '../img/inactiveIcon.png'
        let iconActive = '../img/activeIcon.png'
        let map = new google.maps.Map(document.getElementById('map'), {
                zoom: 11,
                center: new google.maps.LatLng(50.44985163771838, 30.533027825622177),
            });

        let kyiv = new google.maps.LatLng(50.44985163771838, 30.533027825622177);
        let moscow = new google.maps.LatLng(55.73955599548803, 37.5653342295529);
        


        function init() {
            

            for (let i = 0; i < locations.length; i++) {
                locations[i].marker = new google.maps.Marker({
                    position: new google.maps.LatLng(...locations[i].latlng),
                    map: map,
                    icon: iconDefault
                });
                locations[i].marker.addListener('click', function() {
                    for (let i = 0; i < locations.length; i++) {
                        locations[i].marker.setIcon(iconDefault)
                    }
                    locations[i].marker.setIcon(iconActive)
                    for (let i = 0; i < mapsInfos.length; i++) {
                        mapsInfos[i].classList.remove('active')
                    }
                    mapsInfos[i].classList.add('active')

                });
            }
            for (let i = 0; i < mapsInfos.length; i++) {
                mapsInfos[i].addEventListener('click', function() {
                    for (let i = 0; i < locations.length; i++) {
                        locations[i].marker.setIcon(iconDefault)
                    }
                    locations[i].marker.setIcon(iconActive)
                    for (let i = 0; i < mapsInfos.length; i++) {
                        mapsInfos[i].classList.remove('active')
                    }
                    mapsInfos[i].classList.add('active')
                })
            }
        }


        //citys changer
        // let citysVariations = document.querySelectorAll('.')
        let selectedCity = document.querySelector('.selected-city span')
        let allCitysWrapper = document.querySelector('.citys-dropdown')
        let allCitys = document.querySelectorAll('.citys-dropdown span')

        selectedCity.addEventListener('click', function(){
            this.classList.toggle('active')
            allCitysWrapper.classList.toggle('active')
        })

        let citys = new Array( kyiv ,moscow )
       
        for( let i = 0; i <allCitys.length ; i++) {
            allCitys[i].addEventListener('click', function(){
                console.log()
                selectedCity.innerHTML= this.innerHTML
                selectedCity.classList.toggle('active')
                allCitysWrapper.classList.toggle('active')
                map.setCenter(citys[i])
                let dataCitys = allCitys[i].dataset.points
                // console.log(dataCitys/)
                let blocks = document.querySelectorAll("."+dataCitys)
                // console.log(blocks)
                for( let i = 0; i< mapsInfos.length; i++) {
                    mapsInfos[i].classList.remove('visible');
                }
                for( let i = 0; i< blocks.length; i++) {
                    blocks[i].classList.add('visible');
                }
            })
        }
        let initialBlocks = document.querySelectorAll('.kyiv')
        for( let i = 0; i< initialBlocks.length; i++) {
                    initialBlocks[i].classList.add('visible');
            }
        google.maps.event.addDomListener(window, 'load', init);

});