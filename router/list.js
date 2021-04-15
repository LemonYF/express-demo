let express = require('express')
let router = express.Router()

router.get('/list', ( req, res ) => res.send('list'))

module.exports = router

