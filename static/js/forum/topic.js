function replayMess(id){
    console.log(id)
    $('#discussId').val(id)
    $(".replay-dialog").css({'display': 'block'})
};

$("#removeRpy").click(function () {
    $(".replay-dialog").css({'display': 'none'})
});

$("#discuss-btn").click(function () {
    $.post('postdiscuss', $("#frmDiscuss").serialize(), function (data) {
        if(data.code === 200){
           window.location.reload()
        } else {
            alert(data.mess)
        }
    })
});

$(function () {
    $("#frmReplay").bootstrapValidator({
        message: 'This value is not valid',
        excluded: 'disabled',//关键配置，表示只对于禁用域不进行验证，其他的表单元素都要验证

        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',//显示验证成功或者失败时的一个小图标
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'

        },
        fields: {
            replay: {
                validators: {
                    notEmpty: {
                        message: '回复不能为为空..'
                    },
                },

            },
        },
    })
});

$("#btnRpy").click(function () {
    $("#frmReplay").bootstrapValidator('validate');
    if($("#frmReplay").data('bootstrapValidator').isValid()){
        $.post('relaydiscuss', $('#frmReplay').serialize(), function (ret) {
            console.log($('#frmReplay').serialize())
            if(ret.code === 200){
                window.location.reload()
            } else {
                alert(ret.mess)
                // layui.use('layer', function () {
                //     var layer = layui.layer;
                //     layer.msg(ret.mess, {
                //         time: 2000,
                //         btn: ['明白了']
                //     });
                // })
            }
        })
    }
})