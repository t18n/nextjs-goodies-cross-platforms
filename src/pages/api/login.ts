import type { NextApiRequest, NextApiResponse } from 'next';
import { fakeToken } from '../../constants/token';

type Data = {
  token?: string;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { username, password } = req.body;

  if (!username) return res.status(400).json({ error: 'Username is required' });
  if (!password) return res.status(400).json({ error: 'Password is required' });

  if (username === 'admin' && password === 'Secret123') {
    return res.status(200).json({ token: fakeToken });
  }

  return res.status(400).json({ error: 'Invalid username or password' });
}
