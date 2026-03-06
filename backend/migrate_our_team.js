import 'dotenv/config';
import pool from './pgdb/db.js';

async function migrate() {
    try {
        console.log('Starting migration...');
        await pool.query(`
            ALTER TABLE sports.games 
            ADD COLUMN IF NOT EXISTS our_team TEXT CHECK (our_team IN ('HOME', 'AWAY'));
        `);
        console.log('Migration successful: Added our_team column to sports.games');
        process.exit(0);
    } catch (err) {
        console.error('Migration failed:', err);
        process.exit(1);
    }
}

migrate();
