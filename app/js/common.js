$('.btn-burger').on('click', function () {
    $(this).toggleClass('click');
   $('header .menu').fadeToggle();
});

$('.examination-slider').slick({
    slidesToShow: 1,
    fade: true,
    infinite: false,
    // arrows: false,
    prevArrow: $('.btn-prev-slide'),
    nextArrow: $('.btn-next-slide'),
    adaptiveHeight: true
});



$('.js-example-basic-single').select2({
    placeholder: "Поиск региона",
    width: "100%"
});
