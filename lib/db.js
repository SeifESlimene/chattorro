import mysql from "mysql";
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

db.connect();

export default function executeQuery({ query, values }) {
  try {
    const results = db.query(query, values);
    db.end();
    return results;
  } catch (error) {
    return { error };
  }
}
