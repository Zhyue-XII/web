$(function () {

});
$("#discuss-btn").click(function () {
    console.log($("#frmDiscuss").serialize())
    $.post('postdiscuss', $("#frmDiscuss").serialize(), function (data) {
        if(data.code === 200){
           window.location.reload()
        } else {
            alert(data.mess)
        }

    })
})