var express = require('express')

var router = express.Router()

router.get('/', (req, res, next) => res.status(200).send({data:{users:[]}}))
router.post('/', (req, res, next) => res.status(200).send(req.body))

module.exports = router
