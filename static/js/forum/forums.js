function dz(id) {
    $.get('like', {'id':id}, function (ret) {
        if(ret.code === 200){
            window.location.reload()
        } else {
            alert(ret.mess)
        }
    })
}

var count = $('#count').html()
var limit = Math.ceil(count /8)
var page = 0;
function more() {
    page++;
    $.post('pagelist', {'curr': page}, function (ret) {
        var data = ret.data, html = '';
        console.log(ret.data)
        if (data != '') {
            for (var i = 0; i < 8; i++) {
                html = '<div><a href="javascript:void(0)"><img src="/static/img/u.gif" alt=""></a>' +
                    '<h2><a class="layui-badge layui-bg-green">提问</a> ' +
                    '<a href="/forum/topic?id='+ data[i].id + '">' + data[i].title + '</a></h2><p class="info">' +
                    '<span style="color: black">' + data[i].author + '</span><span>' + data[i].issue_time + '</span>' +
                    '<span style="float: right;"><i class="eyes glyphicon glyphicon-eye-open"></i>' + data[i].dz_number + '</span></p>' +
                    '</div>'
                $('#topicData').append(html)
            }
        }else {
            $('#loadMore').html('没有更多了..')
        }
    })
}

$(document).ready(more())