import type { NextApiRequest, NextApiResponse } from 'next';
import pool from "@/server/db"; // Adjust the path as needed

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    try {
      const { id } = req.query;

      if (!id || typeof id !== 'string') {
        return res.status(400).json({ message: 'Booking ID is required' });
      }

      // Convert id to a number
      const bookingId = parseInt(id, 10);

      // Delete the booking with the given ID
      const query = 'DELETE FROM bookings WHERE id = $1';
      const values = [bookingId];
      const result = await pool.query(query, values);

      // Check if any rows were affected
      if ((result as { rowCount: number }).rowCount > 0) {
        res.status(200).json({ message: 'Booking cancelled successfully' });
      } else {
        res.status(404).json({ message: 'Booking not found' });
      }
    } catch (error) {
      console.error('Error cancelling booking:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
