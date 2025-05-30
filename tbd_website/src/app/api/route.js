import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function getConnection() {
  try{
    const connection = await mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "muar_db",
  });

  const [rows] = await connection.execute("SELECT * FROM mua_schedule");
  connection.end();

  return NextResponse.json(rows);
  }
  catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json({ error: "Failed to fetch MUA schedule data." }, { status: 500 });
  }
}