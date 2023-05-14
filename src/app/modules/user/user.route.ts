import express from 'express';
import { getUser, createUser, getUserByID, getAdminUsers, getStudentUsers } from './user.controller';

const router = express.Router();

/* 
    first route -> /
    second route -> /:id -> dynamic
*/

router.get('/', getUser);
router.get("/admins", getAdminUsers);
router.get("/students", getStudentUsers);
router.get("/:id", getUserByID);
router.post('/create-user', createUser);

export default router;