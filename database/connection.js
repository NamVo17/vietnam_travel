import mysql from "mysql2/promise"

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE || "vietnam_travel",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

// Helper function to execute SQL queries
export async function query(sql, params) {
  try {
    const [results] = await pool.execute(sql, params)
    // Ensure results is always treated as an array
    return Array.isArray(results) ? results : [results]
  } catch (error) {
    console.error("Database query error:", error)
    throw error
  }
}

export default pool

