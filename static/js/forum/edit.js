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
        var reader = new FileReader();
        var AllowImgFileSize = 2100000; //上传图片最大值(单位字节)（ 2 M = 2097152 B ）超过2M上传失败
        var file = $("#picture")[0].files[0];
        var imgUrlBase64;
        if (file) {
            //将文件以Data URL形式读入页面
            imgUrlBase64 = reader.readAsDataURL(file);
            reader.onload = function (e) {
                if (AllowImgFileSize != 0 && AllowImgFileSize < reader.result.length) {
                    alert('上传失败，请上传不大于2M的图片！');
                    return;
                } else {
                    //执行上传操作
                    alert(reader.result);
                    var plate_name = $("#plate").val();
                    var topic_title = $("#topic_title").val();
                    var topic_text = $("#topic_text").val();
                    var picture = reader.result;
                    var data = {'plate_name':plate_name,'topic_title': topic_title, 'topic_text':topic_text,'picture':picture}
                    $.post('issuetopic', data, function (res) {
                        console.log(data)
                        if (res.code === 200) {
                            window.location.reload()
                        } else {
                            alert(res.mess)
                        }
                    })


                }
            }
        }





    }
})