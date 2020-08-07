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

    $(".form").each(function() {
        $(this).validate({
            errorClass: "invalid",
            messages: {
                name: {
                    required: "Поле Имя обязательно",
                    minlength: 2,
                },
                email: {
                    required: "Пле Email обязателен",
                },
                phone: {
                    required: "Поле Телефон обязателен",
                },
            },
        });
    })
});