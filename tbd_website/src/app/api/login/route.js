import { getConnection } from '../route';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { email, password } = req.body;
  try {
    const conn = await getConnection();
    const [rows] = await conn.execute(
      'SELECT * FROM users WHERE email = ? AND password = ?',
      [email, password]
    );
    if (rows.length > 0) {
      res.status(200).json({ success: true, user: rows[0] });
    } else {
      res.status(401).json({ success: false, message: 'Login gagal' });
    }
    await conn.end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}