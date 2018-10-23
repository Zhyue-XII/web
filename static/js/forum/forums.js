function dz(id) {
    $.get('like', {'id':id}, function (ret) {
        if(ret.code === 200){
            window.location.reload()
        } else {
            alert(ret.mess)
        }
    })
}