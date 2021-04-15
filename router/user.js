/**
 * user.js
 * @description user路由
 */

let express = require('express')
let router = express.Router()
let fs = require('fs')
let bodyParser = require('body-parser') // 引入中间件

let jsonParser = bodyParser.json({extended:false}) // 解析json类型)

// 利用jsonParser解析请求体
router.get('/', (req,res) => res.send('user')) // 访问user根路由

// 访问/user/getUserList
router.get('/getUserList', (req,res) => {
    fs.readFile('../express-demo/testdata/user.json', 'UTF8', (err, data) => {
        if (err) throw err
        res.send(data)
    })
})

// 访问/user/postUserList
router.post('/postUserList', jsonParser, (req, res) => {
    console.log(req.body)
    let {id} = req.body
    fs.readFile('testdata/user.json', 'UTF8', (err, data) => {
        if (err) throw err
        data = JSON.parse(data).filter(item => item.id === id)
        res.send(data)
    })
    // res.send('111')
})

module.exports = router
