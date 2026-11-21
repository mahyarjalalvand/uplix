import "server-only";

import { drizzle } from "drizzle-orm/node-postgres";
import { pool } from "./client";

export const db = drizzle({
  client: pool,
});
