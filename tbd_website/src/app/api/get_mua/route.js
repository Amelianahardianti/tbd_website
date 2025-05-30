// src/app/api/get_mua/route.js
import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "",
      database: "muar_db",
    });

    const [rows] = await connection.execute("SELECT * FROM mua");
    await connection.end();

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: "Database error." }, { status: 500 });
  }
}
