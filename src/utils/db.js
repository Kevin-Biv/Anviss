// db.js
import Dexie from 'dexie';

export const db = new Dexie('baseDatabase');
db.version(1).stores({
  store: 'value', // Primary key and indexed props
});