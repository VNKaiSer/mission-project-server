import express from 'express'
import UserController from '../controllers/UserController'
const router = express.Router()
router.post('/auth/login', UserController.register)
export default router;
