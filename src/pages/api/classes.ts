import type { NextApiRequest, NextApiResponse } from 'next';
import pool from "@/server/db"; // Adjust the path as needed

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { username } = req.query;

      if (!username || typeof username !== 'string') {
        return res.status(400).json({ message: 'Username is required' });
      }

      // Fetch the user ID based on the username
      const queryUser = 'SELECT id FROM users WHERE username = $1';
      const valuesUser = [username];
      const { rows: userRows } = await pool.query(queryUser, valuesUser);

      if (userRows.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      const userId = userRows[0].id;
      console.log('Querying user:', username);
      console.log('User Rows:', userRows);
      console.log('Fetching bookings for user ID:', userId);


      const queryBookings = `
        SELECT id, eventTitle, eventType, eventDate, instructor, location, time 
        FROM bookings 
        WHERE userId = $1
      `;
      const valuesBookings = [userId];
      const { rows: bookingRows } = await pool.query(queryBookings, valuesBookings);
      res.status(200).json(bookingRows);
    } catch (error) {
      console.error('Error fetching bookings:', (error as Error).message, (error as Error).stack);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
