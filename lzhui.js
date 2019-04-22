var Lzhui = function () {
    return this
}
//提示框
Lzhui.prototype.msg = function (title) {
    var str = "";
    if(title){
        str = $(`<div class="msg">${title}</div>`);
    }else{
        str = $(`<div class="msg">提示内容</div>`);
    }
    $("body").append(str);
    setTimeout(function(){
        str.animate({
            'opacity':"0"
        },function(){
            str.remove()
        })
    },1000)
}
//信息框
Lzhui.prototype.messeage=function(){

}
Lzhui.prototype.table = function(param){
    param.data//表格数据
    param.el//表格容器
    param.fn//回调函数
    param.title//表格标题[{code:'',name:''}]
    param.el.empty();
    var table = $("<table></table>");
    var str1 = "";
    var str2 = "";
    for(var i in param.title){
        str1 += `<th>${param.title[i].name}</th>`
    }
    table.append(`<tr>${str1}</tr>`)

    for(var j in param.data){
        str2 = ""
        for(var i in param.title){
            str2 +=  `<td>${param.data[j][param.title[i].code]}</td>`
        }
        table.append(`<tr>${str2}</tr>`)
    }
    param.el.append(table);
    param.fn && param.fn();
}