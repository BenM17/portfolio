//volgende functies uitvoeren wanneer men scrolled over de pagina.
$(document).ready(function () {

    // start cookie concent
    window.onload = function () {
        let jaargang = new Date().getFullYear();
        (jaargang > 2020)
        document.getElementById("jaargang").innerHTML = "- " + jaargang;

        if (getCookie('allowTracking') == null) {
            cookieConsent();
        }
        else if (getCookie('allowTracking') == 'false') {
            console.log("Do not allow tracking!");
            window['ga-disable-UA-43965515-3'] = true;
        } else {
            console.log("ELSE FIRED")
            //ga('create', 'UA-43965515-3', 'indition.be');
            ga('create', 'UA-43965515-3', {
                'cookieDomain': 'none'
            });

            ga('send', 'pageview');
        }
    }

    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'; //???
    }

    function cookieConsent() {
        $('.alert').show();
    }

    $('#btnDeny').click(() => {
        window['ga-disable-UA-43965515-3'] = true; //Opt-out google analytics tracking

        setCookie('allowTracking', 'false', 7)
        $('.alert').hide();
    })

    $('#btnAccept').click(() => {
        setCookie('allowTracking', 'true', 7)

        // ga('create', 'UA-43965515-3', 'indition.be');
        ga('create', 'UA-43965515-3', {
            'cookieDomain': 'none'
        });
        ga('send', 'pageview');

        $('.alert').hide();
    })
    //Einde coockie concent


    $('#cookie').on('hover', function () {
        $('.alert').removeClass('btn-outline-info');
        $('.alert').addClass('btn-info');
    })
    $('#cookie').on('click', function () {
        $('.alert').slideDown();
    })

    if ($(window).width() < 400) {
        $("#facebook").removeClass("fa-2x");
        $("#twitter").removeClass("fa-2x");
        $("#instagram").removeClass("fa-2x");
    } else {
        $("#facebook").addClass("fa-2x");
        $("#twitter").addClass("fa-2x");
        $("#instagram").addClass("fa-2x");
    }


    //smooth scrollen
    let scrollLink = $('.scrollen');
    scrollLink.click(function (e) {
        //default handeling stoppen.
        e.preventDefault();
        //zelf animatie toevoegen, in dit geval scrollen. de .hash zoekt naar # van de nav balk die gelinkt is naar de html lokatie van die #
        $('body,html').animate({ scrollTop: $(this.hash).offset().top }, 1000)
    })

    //volgende functies uitvoeren wanneer men scrolled over de pagina.
    $(window).scroll(function () {

        //locatie waar de scrollbar momenteel is.                
        let scrollbarLocatie = $(this).scrollTop();

        //elk element van de navbar ( $('.scrollen') ) veranderen naar 'active'
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
})