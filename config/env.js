// config/env.js
import { config } from "dotenv";
import path from "path";
const envFile = path.resolve(process.cwd(), `.env.${process.env.NODE_ENV || "development"}.local`);
config({ path: envFile });

export const { PORT, NODE_ENV } = process.env;
