layui.use('layedit', function () {
    var layedit = layui.layedit;
});

$(function () {
    $("#frmEdit").bootstrapValidator({
        message: 'This value is not valid',
        excluded: 'disabled',//关键配置，表示只对于禁用域不进行验证，其他的表单元素都要验证

        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',//显示验证成功或者失败时的一个小图标
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'

        },
        fields: {
            topic_title: {
                validators: {
                    notEmpty: {
                        message: '标题不能为为空..'
                    },
                },
            },
            topic_text: {
                validators: {
                    notEmpty: {
                        message: '内容不能为为空..'
                    },
                },
            },
        },
    })
});

$("#edit-topic-btn").click(function () {
    $("#frmEdit").bootstrapValidator('validate');
    if($("#frmEdit").data('bootstrapValidator').isValid()) {
        var data = $("#frmEdit").serialize()
        $.post('issuetopic', data, function (res) {
            console.log(data)
            if (res.code === 200) {
                window.location.reload()
            } else {
                alert(res.mess)
            }
        })
    }
})