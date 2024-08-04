import { Router } from 'express';
import User from '../models/user';

const router = Router();

router.post('/users', async (req, res) => {
  const { email, location } = req.body;
  try {
    const user = await User.create({ email, location });
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
