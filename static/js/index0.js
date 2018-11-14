layui.use(['carousel', 'form'], function () {
    var carousel = layui.carousel
        , form = layui.form;

    //常规轮播
    carousel.render({
        elem: '#test1',
        arrow: 'always',
        interval: 6000,
        anim: 'fade',
        arrow: 'none',
        width: '100%',
        height: '550px'
    });
});