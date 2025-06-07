import { Database } from 'bun:sqlite';
import { join } from 'path';
export const client = new Database(join(__dirname, 'db.sqlite'));
