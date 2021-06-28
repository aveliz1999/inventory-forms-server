import express from 'express';
import {getDomain, login} from '../controllers/users';

const router = express.Router();

router.post('/login', login);
router.get('/domain', getDomain);

export default router;