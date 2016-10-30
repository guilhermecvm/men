import express from 'express'
import * as controller from './users.controller'

var router = express.Router()

router.get('/', controller.list)
router.get('/:username', controller.get)
router.post('/', controller.create)
router.put('/:username', controller.update)
router.delete('/:username', controller.remove)

export default router
