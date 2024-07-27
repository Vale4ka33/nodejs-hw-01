import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
    try {
        const fileData = await fs.readFile(PATH_DB, 'utf-8');
        if (fileData) {
            const data = JSON.parse(fileData);
            return data;
        } else {
            return [];
        }
    } catch (error) {
        console.log(error);
    }
};

console.log(await getAllContacts());
