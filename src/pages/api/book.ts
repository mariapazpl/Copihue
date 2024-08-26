// pages/api/book.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { eventTitle, eventType, eventDate, instructor, leaders, followers, username, location, time } = req.body;

    const connection = await mysql.createPool({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    });

    try {
      // Fetch user_id based on username
      const [rows] = await connection.query<any[]>(
        'SELECT id FROM users WHERE username = ?',
        [username]
      );

      if (rows.length === 0) {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      const userId = rows[0].id;

      // Insert booking into the database and get the inserted id
      const [result] = await connection.query<any>(
        'INSERT INTO bookings (userId, eventTitle, eventType, eventDate, instructor, leaders, followers, location, time) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [userId, eventTitle, eventType, eventDate, instructor, leaders, followers, location, time]
      );

      // Extract the inserted booking ID
      const bookingId = result.insertId;

      res.status(201).json({ message: 'Class booked successfully', bookingId });
    } catch (error) {
      console.error('Error booking class:', error);
      res.status(500).json({ error: 'Error booking class' });
    } finally {
      await connection.end();
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
