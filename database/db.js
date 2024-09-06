import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const client = createClient({ 
  url: process.env.DATABASE_URL, 
  authToken: process.env.DATABASE_AUTH_TOKEN 
});

export const db = drizzle(client);