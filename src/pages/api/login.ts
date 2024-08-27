import { NextApiRequest, NextApiResponse } from 'next';
import pool from '@/server/db'; // Adjust the path if necessary
import bcrypt from 'bcrypt'; // Make sure to install bcrypt
import jwt from 'jsonwebtoken'; // Make sure to install jsonwebtoken

const JWT_SECRET = process.env.JWT_SECRET || 'default-secret';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      // Query to get the user based on the username
      const query = 'SELECT * FROM users WHERE username = $1';
      const values = [username];
      const { rows } = await pool.query(query, values);

      if (rows.length === 0) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }

      const user = rows[0];

      // Verify the password
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        // Generate a JWT token
        const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
          expiresIn: '1h',
        });

        return res.status(200).json({ message: 'Login successful', token });
      } else {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred during login' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
