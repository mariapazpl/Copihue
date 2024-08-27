import type { NextApiRequest, NextApiResponse } from 'next';
import pool from "@/server/db"; // Adjust the path as needed

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { username } = req.query;

      if (!username || typeof username !== 'string') {
        console.log('Invalid or missing username in query:', username);
        return res.status(400).json({ message: 'Username is required' });
      }

      console.log('Fetching user ID for username:', username);

      // Fetch the user ID based on the username
      const queryUser = 'SELECT id FROM users WHERE username = $1';
      const valuesUser = [username];
      const { rows: userRows } = await pool.query(queryUser, valuesUser);

      if (userRows.length === 0) {
        console.log('No user found for username:', username);
        return res.status(404).json({ message: 'User not found' });
      }

      const userId = userRows[0].id;
      console.log('Fetched user ID:', userId);

      console.log('Fetching bookings for user ID:', userId);

      // Fetch bookings for the user
      const queryBookings = `
        SELECT id, event_title, event_type, event_date, instructor, location, time  
        WHERE userId = $1
      `;
      const valuesBookings = [userId];
      const { rows: bookingRows } = await pool.query(queryBookings, valuesBookings);

      console.log('Fetched bookings:', bookingRows);

      res.status(200).json(bookingRows);
    } catch (error) {
      console.error('Error fetching bookings:', (error as Error).message);
      console.error('Error stack trace:', (error as Error).stack);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    console.log('Invalid request method:', req.method);
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
