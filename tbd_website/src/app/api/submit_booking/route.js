import { getConnection } from '../route';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { user_id, mua_id, service_id, tgl_booking } = req.body;
  try {
    const conn = await getConnection();
    await conn.execute(
      'INSERT INTO bookings (user_id, mua_id, service_id, tgl_booking) VALUES (?, ?, ?, ?)',
      [user_id, mua_id, service_id, tgl_booking]
    );
    res.status(200).json({ success: true });
    await conn.end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}