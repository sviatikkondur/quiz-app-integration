import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    console.log('Received quiz results:', { email });

    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}