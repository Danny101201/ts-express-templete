//use env
import dotenv from 'dotenv';
dotenv.config({ path: 'config.env' });

export let port = process.env.PORT || 5050
export let DB = process.env.DB as string