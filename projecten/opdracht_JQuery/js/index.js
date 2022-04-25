$(document).ready(function () {

    // images zoomen bij mouseover en uitzoomen bij mouseout
    $('.afbeelding').on('mouseover', function () {
        $(this).removeClass('op');
        $(this).addClass('zoom opMax')
    }).on('mouseout', function () {
        $(this).removeClass('zoom opMax');
        $(this).addClass('op')
    });

    //een aantal dingen onzichtbaar maken
    $(".tijdlijn").css('display', 'none');
    $("h3").hide();
    $('.pauze').hide();

    // smooth omlaag scrollen over de hele pagina door op de button te clicken
    $('#scrollDown').click(function () {
        $('#scrollDown').hide(function () {
            $('.pauze').show(function autoscroller() {
                $('html,body').animate({ scrollTop: $(document).height() }, 25000, function () {
                    $('.pauze').on('click', function () {
                        $('html,body').animate().stop();
                    })
                })
                return false;
            });
        })
    })

    //autoscroll pauzeren
    $('.pauze').on('click', function () {
        $('html, body').stop();
        $('.pauze').hide(function () {
            $('#scrollDown').show();
        })
    })

    // divResult omhoog en omlaag schuiven na klik op knop
    $('#btnTijdlijn').on('click', function () {
        $('.tijdlijn').slideToggle(1000);
    });
    $('#btnTijdlijnSluiten').on('click', function(){
        $('.tijdlijn').slideUp(1000);
    })

    //smooth scrollen
    let scrollLink = $('.scrollen');
    scrollLink.click(function (e) {
        //default handeling stoppen.
        e.preventDefault();
        //zelf animatie toevoegen, in dit geval scrollen. de .hash zoekt naar # van de nav balk die gelinkt is naar de html lokatie van die #
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000)
    })


    let afbeelding;
    let bladzijde1 = $('#bladzijde1');
    let bladzijde2 = $('#bladzijde2');
    let bladzijde3 = $('#bladzijde3');
    let bladzijde4 = $('#bladzijde4');
    let bladzijde5 = $('#bladzijde5');
    let bladzijde6 = $('#bladzijde6');
    let bladzijde7 = $('#bladzijde7');
    let bladzijde8 = $('#bladzijde8');

    let tekst1 = $('#tekst1');
    let tekst2 = $('#tekst2');
    let tekst3 = $('#tekst3');
    let tekst4 = $('#tekst4');
    let tekst5 = $('#tekst5');
    let tekst6 = $('#tekst6');
    let tekst7 = $('#tekst7');
    let tekst8 = $('#tekst8');

    let titels1 = $('.titels1');
    let titels2 = $('.titels2');
    let titels3 = $('.titels3');
    let titels4 = $('.titels4');
    let titels5 = $('.titels5');
    let titels6 = $('.titels6');
    let titels7 = $('.titels7');
    let titels8 = $('.titels8');

    let streepje1 = $('#streepje1');
    let streepje2 = $('#streepje2');
    let streepje3 = $('#streepje3');
    let streepje4 = $('#streepje4');
    let streepje5 = $('#streepje5');
    let streepje6 = $('#streepje6');
    let streepje7 = $('#streepje7');
    let streepje8 = $('#streepje8');

    let achtergrondDiv = $('.bg');

    function AnimatieLinks(titel, streepje, tekst) {
        titel.slideDown(1500, function () {
            streepje.animate({ top: -100 });
            tekst.animate({ left: 5, top: -30 });
        });
    };

    function blur(boven, midden, onder) {
        boven.css('filter', 'blur(10px)');
        midden.css('filter', 'blur(0px)');
        onder.css('filter', 'blur(10px)');
    };

    function AnimatieRechts(titel, streepje, tekst) {
        titel.slideDown(1500, function () {
            streepje.animate({ top: -100 });
            tekst.animate({ left: -5, top: -30 });
        });
    };

    //volgende functies uitvoeren wanner men scrolled over de pagina.
    $(window).scroll(function () {

        //locatie waar de scrollbar momenteel is.                
        let scrollbarLocatie = $(this).scrollTop();

        // achtergrond veranderen als we scrollen.
        for (let i = 1; i < 9; i++) {
            //positie van de volgende bladzijde bepalen.
            let bladzijde = $('#bladzijde' + i).offset().top - 250;

            if (scrollbarLocatie >= bladzijde) {
                console.log('scrollbarlocatie: ', scrollbarLocatie)
                
                switch (i) {
                    
                    case 1:
                        blur(bladzijde3, bladzijde1, bladzijde2);
                        AnimatieLinks(titels1, streepje1, tekst1);
                        afbeelding = 'url("img/Tennis_For_Two_in_1958.jpg")'
                        break;

                    case 2:
                        blur(bladzijde1, bladzijde2, bladzijde3);
                        AnimatieRechts(titels2, streepje2, tekst2);
                        afbeelding = 'url("img/pong_bg.jpg")'
                        break;

                    case 3:
                        blur(bladzijde2, bladzijde3, bladzijde4);
                        AnimatieLinks(titels3, streepje3, tekst3);
                        afbeelding = 'url("img/pacman.png")'
                        break;

                    case 4:
                        blur(bladzijde3, bladzijde4, bladzijde5);
                        AnimatieRechts(titels4, streepje4, tekst4);
                        afbeelding = 'url("img/super_mario.jpg")'
                        break;

                    case 5:
                        blur(bladzijde4, bladzijde5, bladzijde6);
                        AnimatieLinks(titels5, streepje5, tekst5);
                        afbeelding = 'url("img/pokemon.jpg")'
                        break;

                    case 6:
                        blur(bladzijde5, bladzijde6, bladzijde7);
                        AnimatieRechts(titels6, streepje6, tekst6);
                        afbeelding = 'url("img/ps1.jpg")'
                        break;

                    case 7:
                        blur(bladzijde6, bladzijde7, bladzijde8);
                        AnimatieLinks(titels7, streepje7, tekst7);
                        afbeelding = 'url("img/Xbox.jpg")'
                        break;

                    case 8:
                        blur(bladzijde7, bladzijde8, bladzijde6);
                        AnimatieRechts(titels8, streepje8, tekst8);
                        afbeelding = 'url("img/VR.jpg")'
                        break;
                }
                console.log('bladzijdeTest', i, ': ', bladzijde);
                achtergrondDiv.css('background-image', 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),' + afbeelding);
            }
        }

        //elke element van de navbar ( $('.scrollen') ) veranderen naar 'active'
        scrollLink.each(function () {
            //.hash = om attributen te zoeken met een # teken. .offset().top = om te kijken hoe ver van de top van de pagine deze locatie is
            var sectionOffset = $(this.hash).offset().top - 250;

            if (sectionOffset <= scrollbarLocatie) {
                //active class toeveoegen
                $(this).parent().addClass('active');
                //active class van de parents en siblings weghalen. 
                $(this).parent().siblings().removeClass('active');
            }
        })
    })

    //raketje naar boven laten vliegen en autoscroll 'ongeveer' laten volgen.
    $('#blokje').on('click', function () {
        $('.spaceText').text("Lift off!");
        $('.spaceText').toggle(3000);
        $('#blokje').animate({ top: '-13500px' }, 15500);
        $('html,body').animate({ scrollTop: 0 }, 10250);
    });
})