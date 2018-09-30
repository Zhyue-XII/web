$(function () {
    $("#mo-fang").css({"transform":"rotate(360deg)","transition-delay":".8s","opacity":"1"})
    $("#mo-title").css({"opacity":"1","transform":"scale(1)","margin-top":"7%"})
    $("#first").css({background:'#f54e058c'})
    $(".bg-service").css({"transform":"scale(1)","opacity":"1"})

    $("#frm-data").bootstrapValidator({
        message: 'This value is not valid',
        excluded: 'disabled',//关键配置，表示只对于禁用域不进行验证，其他的表单元素都要验证

        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',//显示验证成功或者失败时的一个小图标
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'

        },

        fields: {
            name: {
                message: '用户名不能为空',//默认提示信息
                validators: {
                    notEmpty: {
                        message: '用户名必填不能为空'
                    },
                }
            },
            company: {
                message: '用户名不能为空',//默认提示信息
                validators: {
                    notEmpty: {
                        message: '公司名称必填不能为空'
                    },
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: '邮件不能为空'
                    },
                    emailAddress: {
                        message: '请输入正确的邮件地址如：123@qq.com'
                    }
                }
            },
            tel: {
                message: 'The phone is not valid',
                validators: {
                    notEmpty: {
                        message: '手机号码不能为空'
                    },
                    stringLength: {
                        min: 11,
                        max: 11,
                        message: '请输入11位手机号码'
                    },
                    regexp: {
                        regexp: /^1[3|5|8]{1}[0-9]{9}$/,
                        message: '请输入正确的手机号码'
                    }
                }
            },
        }
    })
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

$("#sbm-btn").click(function () {
    $("#frm-data").bootstrapValidator('validate');
    var data_list = $("#frm-data").serialize();
    if($("#frm-data").data('bootstrapValidator').isValid()){
        console.log(data_list)
        $.get('/contact',data_list,function (data) {
            alert(data)
        })
    }
})