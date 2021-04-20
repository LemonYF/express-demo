let express = require('express') // 引入express
let app = express() // 相当于 http.createServer(app)
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

// 监听3000端口
let server = app.listen(3000, () => {
    let host = server.address().address // host域
    let port = server.address().port // 端口号

    console.log(`Server running at http://${host}:${port}`)
})
