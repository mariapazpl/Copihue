import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export async function registerUser(username: string, email: string, password: string) {
  const connection = await mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  });

  try {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    console.log('Hashed Password:', hashedPassword);  // Debugging line

    const [result] = await connection.query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );

    console.log('User registered successfully:', result);
  } catch (error) {
    console.error('Error registering user:', error);
  } finally {
    await connection.end();
  }
}
