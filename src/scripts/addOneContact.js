import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { log } from 'node:console';

export const addOneContact = async () => {
    try {
        const fileData = await fs.readFile(PATH_DB, 'utf-8');
        const data = JSON.parse(fileData);
        const newContact = createFakeContact();
        data.push(newContact);
        await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2));
        
    } catch (error) {
        console.log(error);
    }
};

addOneContact();
