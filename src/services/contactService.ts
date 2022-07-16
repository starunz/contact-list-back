import { contactRepository } from '../repositories/index.js';

const getContacts = async () => {
	const contacts = await contactRepository.findAll();

	return contacts;
};

export {
	getContacts,
};
