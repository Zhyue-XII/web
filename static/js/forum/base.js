$(function () {
    $("#frmLogin").bootstrapValidator({
        message: 'This value is not valid',
        excluded: 'disabled',//关键配置，表示只对于禁用域不进行验证，其他的表单元素都要验证

        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',//显示验证成功或者失败时的一个小图标
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'

        },

        fields: {
            username: {
                message: '用户名不能为空',//默认提示信息
                validators: {
                    notEmpty: {
                        message: '用户名必填不能为空'
                    },
                }
            },
            password: {
                message: '密码不能为空..',//默认提示信息
                validators: {
                    notEmpty: {
                        message: '密码不能为空..'
                    },
                }
            },
        }
    })

    $("#frmResister").bootstrapValidator({
        message: 'This value is not valid',
        excluded: 'disabled',//关键配置，表示只对于禁用域不进行验证，其他的表单元素都要验证

        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',//显示验证成功或者失败时的一个小图标
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'

        },

        fields: {
            username: {
                message: '用户名不能为空',//默认提示信息
                validators: {
                    notEmpty: {
                        message: '用户名必填不能为空'
                    },
                }
            },
            password1: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空..'
                    },
                    identical: {
                        field: 'password2',
                        message: '两次输入的密码不相符'
                    }
                },

            },
            password2: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空..'
                    },
                    identical: {
                        field: 'password1',
                        message: '两次输入的密码不相符'
                    }
                }
            }
        },
    })

     $("#frmPsd").bootstrapValidator({
        message: 'This value is not valid',
        excluded: 'disabled',//关键配置，表示只对于禁用域不进行验证，其他的表单元素都要验证

        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',//显示验证成功或者失败时的一个小图标
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'

        },

        fields: {
            password1: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空..'
                    },
                    identical: {
                        field: 'password2',
                        message: '两次输入的密码不相符'
                    }
                },

            },
            password2: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空..'
                    },
                    identical: {
                        field: 'password1',
                        message: '两次输入的密码不相符'
                    }
                }
            }
        },
    })
})

//用户登陆
$("#btnSave").click(function () {
    $("#frmLogin").bootstrapValidator('validate');
    var data_list = $("#frmLogin").serialize();
    if($("#frmLogin").data('bootstrapValidator').isValid()){
        $.post('/forum/login',data_list,function (res) {
            console.log(data_list)
            if(res.code===200){
                window.location.reload();
            }else {
                $("#mess").html(res.mess)

                $(".re").click(function () {
                    $("#mess").html(" ")
                });
            }
        })
    }
});

//注销账号
function logout(){
    $.get('/forum/logout',function (res) {
        if(res.code === 200){
            window.location.reload();
        }
    })
}


//注册账号
$("#btn-sub").click(function () {
    $("#frmResister").bootstrapValidator('validate');
    var data_list = $("#frmResister").serialize();
    if($("#frmResister").data('bootstrapValidator').isValid()){
        $.post("/forum/register",data_list, function (res) {
            if(res.code === 204){
                $("#message").html(res.mess)
            } else {
                $("#registerModal").modal('hide')
            }
        })
    }
})

//修改密码
$("#btn-psd").click(function () {
    if($("#frmPsd").data('bootstrapValidator').isValid()){
        $.post('changePsd',$("#frmPsd").serialize(),function (res) {
          if(res.code === 200){
              $("#changePsd").modal('hide')
          } else {
              $("#res").html(res.mess)
          }
        })
    }

})



