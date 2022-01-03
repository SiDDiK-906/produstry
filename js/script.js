// // ======================================
// // 		Nav Bar jQuery Start
// // ======================================
$(".icon_jquery").click(function(){
    $(".last_jquery").fadeToggle();
})
// // ======================================
// // 		Banner Plugin Section Start
// // ======================================
$('.banner_plugin').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    autoplay: false, 
    autoplaySpeed: 1500,
    prevArrow: '<ul class="first_arrow"><li><i class="fa fa-angle-left prev" aria-hidden="true"></i></li></ul>',
    nextArrow: '<ul class="last_arrow"><li><i class="fa fa-angle-right next" aria-hidden="true"></i></li></ul>',
});
// ======================================
// 		Counter Plugin Section Start
// ======================================
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
// ====================================================
// 		         Blog Plugin Start
// ====================================================
$('.blog_slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    autoplay: false,
    autoplaySpeed: 300,
    centerMode: true,
    centerPadding: 0,
    prevArrow: '<ul class="first_arrow"><li><i class="fa fa-angle-left prev" aria-hidden="true"></i></li></ul>',
    nextArrow: '<ul class="last_arrow"><li><i class="fa fa-angle-right next" aria-hidden="true"></i></li></ul>',

});
// ====================================================
// 		    Testimonial text Plugin 1 Start
// ====================================================
$('.txt_plug').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplaySpeed: 300,
    asNavFor: '.plugin2',
    prevArrow: '<ul class="first_arrow"><li><i class="fa fa-angle-left prev" aria-hidden="true"></i></li></ul>',
    nextArrow: '<ul class="last_arrow"><li><i class="fa fa-angle-right next" aria-hidden="true"></i></li></ul>',
});
// // ====================================================
// // 		    Feedback img Plugin 2 Start
// // ====================================================
$('.plugin2').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    asNavFor: '.txt_plug',
});
// ====================================================
// 		    Brand Plugin Start
// ====================================================
$('.brand_plugin').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    prevArrow: '<ul class="first_arrow"><li><i class="fa fa-angle-left prev" aria-hidden="true"></i></li></ul>',
    nextArrow: '<ul class="last_arrow"><li><i class="fa fa-angle-right next" aria-hidden="true"></i></li></ul>',
});