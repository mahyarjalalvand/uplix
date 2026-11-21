import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("database url is not defined");
}

export const pool = new Pool({
  connectionString,
});
