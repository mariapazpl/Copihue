import pool from "@/server/db"; // adjust the path as needed
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export async function registerUser(username: string, email: string, password: string) {
  try {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    console.log('Hashed Password:', hashedPassword);  // Debugging line

    const query = `
      INSERT INTO users (username, email, password)
      VALUES ($1, $2, $3)
      RETURNING id;
    `;
    const values = [username, email, hashedPassword];

    const { rows } = await pool.query(query, values);

    console.log('User registered successfully:', rows[0]);
  } catch (error) {
    console.error('Error registering user:', error);
  }
}
