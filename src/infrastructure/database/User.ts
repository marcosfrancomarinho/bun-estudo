import { join } from 'path';
import { client } from './Client';

async function createTable(migrate: string): Promise<void> {
  const path: string = join(__dirname, migrate);
  const file = Bun.file(path);
  const sql = await file.text();
  client.run(sql);
  console.log(`Create database and e table user on ${path}`);
}
createTable('User.sql');
