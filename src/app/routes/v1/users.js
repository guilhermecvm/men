var express = require('express')
var controller = require('../../users')

var router = express.Router()

router.get('/', controller.list)
router.get('/:id', controller.get)
router.post('/', controller.create)
router.put('/', controller.update)
router.delete('/', controller.remove)

module.exports = router
