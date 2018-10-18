layui.use('layedit', function () {
    var layedit = layui.layedit;
});

$("#edit-topic-btn").click(function () {
    var data = $("#frmEdit").serialize()
    $.post('issuetopic',data, function (res) {
        if(res.code === 200) {
            window.location.reload()
        } else {
            alert(res.mess)
        }
    })

})