import { getConnection } from '../route';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { name, email, password } = req.body;
  try {
    const conn = await getConnection();
    await conn.execute(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password]
    );
    res.status(200).json({ success: true });
    await conn.end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}