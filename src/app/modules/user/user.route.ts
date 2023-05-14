import express from 'express';
import { getUser, createUser, getUserByID } from './user.controller';

const router = express.Router();

router.get('/', getUser);
router.get("/:id", getUserByID);
router.post('/create-user', createUser);

export default router;