/**
 * Created with JetBrains WebStorm.
 * User: xuwenmin
 * Date: 14-4-19
 * Time: 下午1:20
 * To change this template use File | Settings | File Templates.
 */

var express = require('express'),
    io = require('socket.io');

var app  =express();

app.use(express.static(__dirname));

var server = app.listen(8889, '120.25.149.95');


var ws = io.listen(server,{origins: '*:*'});

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});


// 检查昵称是否重复
var checkNickname = function(name){
    for(var k in ws.sockets.sockets){
        if(ws.sockets.sockets.hasOwnProperty(k)){
            if(ws.sockets.sockets[k] && ws.sockets.sockets[k].nickname == name){
                return true;
            }
        }
    }
    return false;
}
// 获取所有的昵称数组
var getAllNickname = function(){
    var result = [];
    for(var k in ws.sockets.sockets){
        if(ws.sockets.sockets.hasOwnProperty(k)){
            result.push({
                name: ws.sockets.sockets[k].nickname
            });
        }
    }
    return result;
}

ws.on('connection', function(client){
    console.log('\033[96msomeone is connect\033[39m \n');
    // setInterval(function(){
    //   ws.sockets.emit('announcement','系统',"ping", {type:'join', name:getAllNickname()});
    // },1000);

    client.on('join', function(msg){
        // 检查是否有重复
        console.log('msg on join:'+msg);

        if(checkNickname(msg)){
            client.emit('nickname', '昵称有重复!');
        }else{
            client.nickname = msg;
            if(msg == 'admin'){
               client.join('admin');
            }
            ws.sockets.emit('announcement', '系统', msg + ' 加入了聊天室!', {type:'join', name:getAllNickname()});
        }
    });
    // 监听发送消息
    client.on('send.message', function(msg){
        console.log('1111111:::'+msg);
        client.broadcast.emit('send.message',client.nickname,  msg);
    });


   client.on('send.message.one', function(msg){
        client.broadcast.to('admin').emit('send.message',client.nickname,  msg);
    });



    client.on('disconnect', function(){
        if(client.nickname){
            client.broadcast.emit('send.message','系统',  client.nickname + '离开聊天室!', {type:'disconnect', name:client.nickname});
        }
    })

})

