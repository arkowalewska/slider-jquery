$(document).ready(function () {

    /* Kod obsługujący slider */

    var slideShow = $('.slide-show');
    var slideCount = $('.single-slide').length;
    var slideWidth = 100 / slideCount;
    var slideIndex = 0;

    /* Dynamicznie ustawiamy szerokość kontenera slide-show */

    slideShow.css({
        'width': slideCount * 100 + '%'
    });

    /* Ustawiamy dynamicznie wielkość pojedynczego slidu i jego odległość od lewej krawędzi */

    $('.single-slide').each(function (index) {
        $(this).css({
            'width': 100 / slideCount + '%',
            'margin-left': index * slideWidth + '%'
        });
    });

    /*  $('.slider-caption').eq(0).hide().fadeIn('slow');  */


    /* Funkcja obsługująca animacje slidu */
    function slide(newSlideIndex) {

        /* Przerwanie działanie funkcji jesli brakuje slidow z lewej lub prawej */
        /*if (newSlideIndex < 0 || newSlideIndex >= slideCount) {
            return;
        }*/
        
        if (newSlideIndex < 0) {
            newSlideIndex = slideCount - 1;
        } else if (newSlideIndex >= slideCount) {
            newSlideIndex = 0;
        }

        /* Zmień powyższy warunek w taki sposób, aby po ostatnim slidzie wracał do pierwszego i po pierwszym do ostatniego */


        /* ukryj napis z kolejnego slidu */
        var nextSliderCaption = $('.slider-caption').eq(newSlideIndex);
        nextSliderCaption.hide();

        var marginLeft = (newSlideIndex * (-100) + '%');

        //wywołanie animacji na elemencie slideShow, która przesunie go o lewy margines równy zmiennej marginLeft

        slideShow.animate({
            'margin-left': marginLeft
        }, 800, function () {
            slideIndex = newSlideIndex;
            nextSliderCaption.fadeIn('slow');

        });

    }


    /* Obsługa kliknięcia strzałki */
    $('.slider-arrows a').click(function () {

        var direction = ($(this).hasClass('next-slide')) ? 1 : -1;
        //console.log(direction);
        slide(slideIndex + direction);
    });
    
    /* Obsluga przewijania slidera za pomoca przyciskow na klawiaturze - strzalka w lewo i prawo */
    $(document).keydown(function(event){
        /*if(event.keyCode == 37) {
            console.log('strzalka w lewo')
        }
        if(event.keyCode == 39) {
            console.log('strzalka w prawo')
        }
        console.log(event.charCode);*/
        
        switch (event.keyCode) {
            case 37:
                slide(slideIndex - 1);
                break;
            case 39:
                slide(slideIndex + 1);
                break;
        }
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    

});