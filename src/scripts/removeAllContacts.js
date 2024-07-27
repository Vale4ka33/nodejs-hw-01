import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
    try {
        const emptyData = [];
        await fs.writeFile(PATH_DB, JSON.stringify(emptyData, null, 2));
    } catch (error) {
        console.log(error);
    }
};

removeAllContacts();
