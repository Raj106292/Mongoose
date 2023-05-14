import express from 'express';
import { getUser, createUser } from './user.controller';

const router = express.Router();

router.get('/', getUser);
router.post('/create-user', createUser);

export default router;