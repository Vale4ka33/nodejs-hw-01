import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
    try {
        const fileData = await fs.readFile(PATH_DB, 'utf-8');
        const data = JSON.parse(fileData);
        if (Array.isArray(data) && data.length > 0) {
            const deletedContact = data.pop();
            await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2));
            return data;
        } else {
            return [];
        }
        
    } catch (error) {
        console.log(error);
    }
};

removeLastContact();
