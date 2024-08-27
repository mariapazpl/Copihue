// pages/api/book.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '@/server/db'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { eventTitle, eventType, eventDate, instructor, leaders, followers, username, location, time } = req.body;

    try {
      // Fetch user_id based on username
      const queryUser = 'SELECT id FROM users WHERE username = $1';
      const valuesUser = [username];
      const { rows: userRows } = await pool.query(queryUser, valuesUser);

      if (userRows.length === 0) {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      const userId = userRows[0].id;

      // Insert booking into the database and get the inserted id
      const queryBooking = `
        INSERT INTO bookings (user_id, event_title, event_type, event_date, instructor, leaders, followers, location, time)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING id
      `;
      const valuesBooking = [userId, eventTitle, eventType, eventDate, instructor, leaders, followers, location, time];
      const { rows: bookingRows } = await pool.query(queryBooking, valuesBooking);

      // Extract the inserted booking ID
      const bookingId = bookingRows[0].id;

      res.status(201).json({ message: 'Class booked successfully', bookingId });
    } catch (error) {
      console.error('Error booking class:', error);
      res.status(500).json({ error: 'Error booking class' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
