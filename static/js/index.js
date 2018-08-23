$(function () {
    $("#mo-fang").css({"transform":"rotate(360deg)","transition-delay":".8s","opacity":"1"})
    $("#mo-title").css({"opacity":"1","transform":"scale(1)","margin-top":"7%"})
    $("#first").css({background:'#f54e058c'})
    $(".bg-service").css({"transform":"scale(1)","opacity":"1"})
})

$("#last-img").click(function () {$("#wapper").css({"margin-left":"-200%"})})
$("#next-img").click(function () {$("#wapper").css({"margin-left":"-100%"})})
$("#first-img").click(function () {$("#wapper").css({"margin-left":"0%"})})

$("#first").click(function () {
    $("#cm-wapper").css({"margin-left": "0%"})
    $("#first").css({background: '#f54e058c'})
    $("#last").css({background: 'gainsboro'})
    $("#next").css({background: 'gainsboro'})
})
$("#next").click(function () {
    $("#cm-wapper").css({"margin-left": "-100%"})
    $("#next").css({background: '#f54e058c'})
    $("#first").css({background: 'gainsboro'})
    $("#last").css({background: 'gainsboro'})
})
$("#last").click(function () {
    $("#cm-wapper").css({"margin-left": "-200%"})
    $("#last").css({background: '#f54e058c'})
    $("#first").css({background: 'gainsboro'})
    $("#next").css({background: 'gainsboro'})
})

$("#try-btn").click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
        if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body').animate({scrollTop: targetOffset}, 800);
            return false;
        }
    }
});