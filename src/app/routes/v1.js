import express from 'express'
import users from '../users/users.router'

var router = express.Router()

router.use('/users', users)

export default router
