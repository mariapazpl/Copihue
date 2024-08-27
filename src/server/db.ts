import { Pool } from 'pg';

// Create a PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL, // Use the connection string from your environment variables
});

// Function to test the database connection
async function testConnection() {
  try {
    console.log('Testing database connection...');
    const client = await pool.connect();
    console.log('Successfully connected to the database.');
    client.release(); // Release the connection back to the pool
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
