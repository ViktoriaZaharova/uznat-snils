$('.js-example-basic-single').select2({
    placeholder: "Поиск региона",
    width: "100%"
});

$('.btn-burger').on('click', function () {
    $(this).toggleClass('click');
   $('header .menu').fadeToggle();
});
