import adapter from '@sveltejs/adapter-auto';
import dotenv from 'dotenv';
import { instantiate, getSupabaseConnection } from './src/utils/supabase.js'

dotenv.config();

instantiate(process.env.DATABASE_URL, process.env.DATABASE_SECRET_KEY);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};

export default config;
