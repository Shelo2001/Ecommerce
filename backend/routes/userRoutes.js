import express from 'express'
const router = express.Router()
import { getUserById, updateUser, authUser, getUserProfile, deleteUser, registerUser, updateUserProfile, getUsers } from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser).get(protect, getUsers)
router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, admin, updateUserProfile)
router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserById).put(protect, admin, updateUser)

export default router
