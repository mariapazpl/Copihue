import mysql from 'mysql2/promise';

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

// Function to test the database connection
async function testConnection() {
  try {
    console.log('Testing database connection...');
    const connection = await pool.getConnection();
    console.log('Successfully connected to the database.');
    connection.release(); // Release the connection back to the pool
  } catch (error) {
    // Type assertion to handle unknown error type
    if (error instanceof Error) {
      console.error('Error connecting to the database:', error.message);
    } else {
      console.error('Error connecting to the database: An unknown error occurred');
    }
  }
}

// Test connection on module load
testConnection();

export default pool;
