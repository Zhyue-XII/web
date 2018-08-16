$('.carousel').carousel({  interval: 3000})

$(function () {
    $("#mo-fang").css({"transform":"rotate(360deg)"})
    $("#mo-title").css({"margin-top":"30px","opacity":"1","transform":"scale(1)"})
    $("#first").css({background:'#f54e058c'})
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