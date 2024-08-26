import type { NextApiRequest, NextApiResponse } from 'next';
import pool from "@/server/db"; // adjust the path as needed

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    try {
      const { id } = req.query;

      if (!id) {
        return res.status(400).json({ message: 'Booking ID is required' });
      }

      // Convert id to a number
      const bookingId = parseInt(id as string, 10);

      // Delete the booking with the given ID
      const [result] = await pool.query(
        'DELETE FROM bookings WHERE id = ?',
        [bookingId]
      );

      // Check if any rows were affected
      if ((result as any).affectedRows > 0) {
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
