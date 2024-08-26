import type { NextApiRequest, NextApiResponse } from 'next';
import pool from "@/server/db"; // adjust the path as needed

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { username } = req.query;

      if (!username) {
        return res.status(400).json({ message: 'Username is required' });
      }

      // Fetch the user ID based on the username
      const [userRows] = await pool.query<any[]>(
        'SELECT id FROM users WHERE username = ?',
        [username]
      );

      if (userRows.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      const userId = userRows[0].id;

      // Fetch bookings including the booking ID
      const [bookingRows] = await pool.query(
        `SELECT id, eventTitle, eventType, eventDate, instructor, location, time 
         FROM bookings 
         WHERE userId = ?`, 
        [userId]
      );

      res.status(200).json(bookingRows);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
