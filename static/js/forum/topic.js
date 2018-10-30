// function replayMess(id){
// //     layer.prompt({title: '回复', formType: 2, shade: 0}, function (text, index) {
// //         if(text == ''){
// //             //pass
// //         }else {
// //             layer.close(index);
// //             var data = {'discussId':id,'replay':text}
// //             $.post('relaydiscuss', data, function (ret) {
// //                 if (ret.code === 200) {
// //                     window.location.reload()
// //                 } else {
// //                     layer.msg(ret.mess)
// //                 }
// //             })
// //         }
// //     });
// // };

function replayUser(name) {
    console.log(name)
    var r = '@'+name+':';
    $('.discuss-detail').val(r)

}

var link = '';
function addUrl() {
    layer.prompt({title: '添加超链接', formType: 0, shade: 0}, function (text, index) {
        if(text == ''){
            //pass
        }else {
            layer.close(index);
            var a = '<a href='+text+'>'+text+'</a></br>'
            $('.addBlock').append(a)
            link = text
        }
    });
}

function addImg() {
    $('#picture').click();
}


var img1 = '';
function imgPreview(fileDom) {
    if (window.FileReader) {
        var reader = new FileReader();
    } else {
        layer.msg("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
    }

    //获取文件
    var file = fileDom.files[0];
    var imageType = /^image\//;
    //是否是图片
    if (!imageType.test(file.type)) {
        layer.msg("请选择图片！");
        return;
    }
    //读取完成
    reader.onload = function (e) {
        //获取图片dom
        var str = e.target.result;
        var img = ' img['+str.split(';', 1)[0]+'];'
        $('.addBlock').append(img)
        img1 = str;
    };
    reader.readAsDataURL(file);
}


$("#discuss-btn").click(function () {
    var data = {'img':img1, 'link':link, 'id':$('#id').val(), 'discuss-detail':$('#discuss-detail').val()};
    console.log(data)
    $.post('postdiscuss',data, function (data) {
        if (data.code === 200) {
            window.location.reload()
        } else {
            layer.msg(data.mess)
        }
    })
});

