import { getConnection } from '../route';

export default async function handler(req, res) {
  try {
    const conn = await getConnection();
    const [rows] = await conn.execute('SELECT * FROM services');
    res.status(200).json(rows);
    await conn.end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}