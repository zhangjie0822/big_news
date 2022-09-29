$.ajaxPrefilter(function(config){
    // 将key=value形式的数据，转成json格式的字符串
    const format2Json = (source) =>{
        let target={}
        source.split('&').forEach((el)=>{
            let kv = el.split('=')
            target[kv[0]] = kv[1]
        })
        // console.log(JSON.stringify(target));
        return JSON.stringify(target)
    }
    config.url = 'http://big-event-vue-api-t.itheima.net'+config.url
    config.contentType ='application/json'
    config.data = format2Json(config.data)
})