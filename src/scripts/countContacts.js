import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';



export const countContacts = async () => {
    try {
        const fileData = await fs.readFile(PATH_DB, 'utf-8');
        const data = JSON.parse(fileData);
        return data.length;
    } catch (error) {
        console.log(error);
    }
};

console.log(await countContacts());
