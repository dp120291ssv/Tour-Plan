$(document).ready(function() {
    var hotelSlider = new Swiper('.hotel-slider', {
        // Optional parameters
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.hotel-slider__button--next',
            prevEl: '.hotel-slider__button--prev',
        },
        effect: "slide",
    })

    var reviewsSlider = new Swiper('.reviews-slider', {
        // Optional parameters
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.reviews-slider__button--next',
            prevEl: '.reviews-slider__button--prev',
        }
    })

    var menuButton = $(".menu-button")
    menuButton.on('click', function() {
        $(".navbar-bottom").toggleClass('navbar-bottom--visible')
    });

    var modalButton = $('[data-toggle=modal]')
    var modalCloseButton = $('.modal__close')
    modalButton.on('click', openModal)
    modalCloseButton.on('click', closeModal);

    function openModal() {
        var targetModal = $(this).attr("data-href");
        $(targetModal).find('.modal__overlay').addClass('modal__overlay--visible')
        $(targetModal).find('.modal__dialog').addClass('modal__dialog--visible')
    }

    function closeModal(event) {
        event.preventDefault();
        var modalOverLay = $('.modal__overlay')
        var modalDialog = $('.modal__dialog')
        modalOverLay.removeClass('modal__overlay--visible')
        modalDialog.removeClass('modal__dialog--visible')
    };

    $('.form').each(function() {
        $(this).validate({
            errorClass: "invalid",
            messages: {
                name: {
                    required: "Name field is required",
                    minlength: "Minimum value 2 letters",
                    maxlength: "Maximum length 25 letters",
                },
                email: {
                    required: "Email is required",
                    minlength: "Minimum value 4 characters",
                    maxlength: "Maximum length 25 characters",
                },
                phone: {
                    required: "The Phone field is required",
                    minlength: "Minimum length 25 digits",
                    maxlength: "Maximum length 25 digits",
                },
            },
        });
    })

    $('.subscribe').each(function() {
        $(this).validate({
            errorClass: "invalid",
            messages: {
                name: {
                    required: "Name field is required",
                    minlength: "Minimum value 2 letters",
                    maxlength: "Maximum length 25 letters",
                },
                email: {
                    required: "Email is required",
                    minlength: "Minimum value 4 characters",
                    maxlength: "Maximum length 25 characters",
                },
                phone: {
                    required: "The Phone field is required",
                    minlength: "Minimum length 8 digits",
                    maxlength: "Maximum length 15 digits",
                },
            },
        });
    })

    $('.map-image').mouseenter(function() {
        $('.map').html(
            "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.0412755648676!2d98.29254741482532!3d7.890750807947486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30503b7bfcd9f903%3A0xf7065fac1e3d7c48!2sDoubleTree%20by%20Hilton%20Phuket%20Banthai%20Resort!5e0!3m2!1sru!2sua!4v1595520272419!5m2!1sru!2sua' class='map-frame' allowfullscreen='' aria-hidden='false' tabindex='0'>< /iframe>"
        );
    });
});