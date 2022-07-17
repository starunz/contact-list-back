import { contactRepository } from '../repositories/index.js';

import { formatContactInfo } from './helpers/formatHelper.js';

import ExistentContactError from '../errors/ExistentContactError.js';

import { CreateContactBody } from '../interfaces/contactInterface.js';

const getContacts = async () => {
	const contacts = await contactRepository.findAll();

	return contacts;
};

const createContact = async (contactInfo: CreateContactBody) => {
	const formattedContact = formatContactInfo(contactInfo);

	await findNoContactOrFail(formattedContact.phone);

	const contact = await contactRepository.insert(formattedContact);

	return contact;
};

const findNoContactOrFail = async (phoneNumber: string) => {
	const existentContact = await contactRepository.findByPhone(phoneNumber);
	if (existentContact) throw new ExistentContactError(phoneNumber);

	return existentContact;
};

export {
	getContacts,
	createContact,
};
