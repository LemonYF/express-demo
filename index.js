let express = require('express') // 引入express
let expressWs = require('express-ws')
// let module1 = require('./router/app-socket')
let app = express() // 相当于 http.createServer(app)
expressWs(app)
app.use('/public', express.static('public'))

// 访问根路由
app.get('/',(request,response) => {
    response.send('Hello World')
})
// 包含请求方式，路径，回调函数
// app.post('/add', {req, res} => res.send('add'))
// app.put('/fix', { req, res } => res.send('fix'))
// app.delete('/delete', { req, res } => res.send('delete'))

// 引入user.js
app.use('/user', require('./router/user'))

// 引入list.js
app.use('/list', require('./router/list'))

// socket.js
app.use('/socket', require('./router/app-socket'))

// 设置请求跨域
// app.all('*', function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');  //设置允许跨域的域名，*代表允许任意域名跨域
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');//允许的header类型
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS'); //跨域允许的请求方式
//     if (req.method === 'OPTIONS') {
//         res.send(200);//让options尝试请求快速结束
//     } else {
//         next();
//     }
// })

// 监听3000端口
let server = app.listen(3000, () => {
    console.log(server.address())
    let host = server.address().address // host域
    let port = server.address().port // 端口号

    console.log(`Server running at http://${host}:${port}`)
})
