
let express = require('express')
let expressWs = require('express-ws')
let router = express.Router()
expressWs(router)

router
    .ws('/socket', function (ws, req){
        ws.send('你连接成功了')
        ws.on('message', function (msg) {
            ws.send(msg)
        })
    })
    .get('/socket', function(req, resp) {
        console.log('收到信息')
        resp.send('你连接成功了')
    })
    .post('/socket', function(req, resp) {
    })

module.exports = router
