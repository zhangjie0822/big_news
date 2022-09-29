$(function(){
    const form = layui.form
    const layer = layui.layer
    $('#go2Reg').on('click',function(){
        $('.login-box').hide()
        $('.reg-box').show()
    })
    $('#go2Login').on('click',function(){
        $('.reg-box').hide()
        $('.login-box').show()
    })
    
    form.verify({
        pwd: [
            /^[\S]{6,12}$/
            ,'密码必须6到12位，且不能出现空格'
          ] ,
        repwd:function(value){
            if($('#password').val() !== value){
                return '两次密码输入不一致'
            }
        }
    })

    
    // 监听注册提交表单
    $('#formReg').on('submit',function(e){
        e.preventDefault()
        $.ajax({
            method:'post',
            // url:'http://big-event-vue-api-t.itheima.net/api/reg',
            url:'/api/reg',
            data:$(this).serialize(),
            success(res){
                console.log($(this).serialize());
                if(res.code !== 0) return layer.msg(res.message)
                $('#go2Login').click()
                layer.msg('注册成功')
            }
        })
    })
    $('#formLogin').on('submit',function(e){
        e.preventDefault()
        $.ajax({
            method:'post',
            // url:'http://big-event-vue-api-t.itheima.net/api/reg',
            url:'/api/login',
            data:$(this).serialize(),
            success(res){
                // console.log($(this).serialize());
                if(res.code !== 0) return layer.msg(res.message)
                layer.msg('登录成功')
                // console.log(res.token);
                localStorage.setItem('token',res.token)
                location.href = '/index.html'
            }
        })
    })
    
})