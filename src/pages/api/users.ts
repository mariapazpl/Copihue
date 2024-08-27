import { NextApiRequest, NextApiResponse } from 'next';
import pool from "@/server/db"; // adjust the path as needed
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, email, password } = req.body;
    console.log('Received data:', { username, email, password });  // Debugging line

    try {
      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
      console.log('Hashed Password:', hashedPassword);  // Debugging line

      const query = `
        INSERT INTO users (username, email, password)
        VALUES ($1, $2, $3);
      `;
      const values = [username, email, hashedPassword];

      await pool.query(query, values);

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user:', error);  // Debugging line
      res.status(500).json({ error: 'Error registering user' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
