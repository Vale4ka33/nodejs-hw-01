import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    try {
        const fileData = await fs.readFile(PATH_DB, 'utf-8');
        const data = JSON.parse(fileData);
        for (let i = 1; i <= number; i++) {
            const contact = createFakeContact();
            data.push(contact);
        }
        await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2));
        
        console.log(`Successfully added ${number} contacts to the database.`);
    } catch (error) {
        console.error('Error processing file:', error);
    }
};

generateContacts(5);
