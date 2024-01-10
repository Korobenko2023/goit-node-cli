const fs = require('fs').promises;
const path = require('path');
const contactsPath = path.join(__dirname, 'db', 'contacts.json');

async function listContacts() {
    // ...твій код. Повертає масив контактів.
    const listContacts = await fs.readFile(contactsPath, 'utf-8');
    return JSON.parse(listContacts);  
}

async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}