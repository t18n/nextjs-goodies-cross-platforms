import type { NextApiRequest, NextApiResponse } from 'next';
import { fakeToken } from '../../constants/token';

type UserInfo = {
  name: string;
  email: string;
  password: string;
  username: string;
};


export type MeData = {
  data?: UserInfo;
  token?: string;
  error?: string;
};

const data: UserInfo = {
  name: "Turbo Thinh",
  email: "me@turbothinh.com",
  password: "admin",
  username: "admin"
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MeData>
) {
  const token = req.cookies.token;

  console.log('>>> token', token);

  if (token && token === fakeToken) {
    return res.status(200).json({ data });
  }

  return res.status(400).json({ error: 'Forbidden!' });
}
