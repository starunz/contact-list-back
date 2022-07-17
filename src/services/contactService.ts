import { contactRepository } from '../repositories/index.js';

import { formatContactInfo } from './helpers/formatHelper.js';

import { ExistentContactError, NoContactError } from '../errors/index.js';

import {
	CreateContactBody,
	UpdateContactInfo
} from '../interfaces/contactInterface.js';

const getContacts = async () => {
	const contacts = await contactRepository.findAll();

	return contacts;
};

const createContact = async (contactInfo: CreateContactBody) => {
	const formattedContact = formatContactInfo(contactInfo);

	await findNoContactOrFail(formattedContact.phone);

	const insertedInfo = await contactRepository.insert(formattedContact);

	return insertedInfo;
};

const findNoContactOrFail = async (phoneNumber: string) => {
	const existentContact = await contactRepository.findByPhone(phoneNumber);
	if (existentContact) throw new ExistentContactError(phoneNumber);

	return existentContact;
};

const editContact = async (updateContactInfo: UpdateContactInfo) => {
	const { contactInfo, contactId } = updateContactInfo;
	
	const formattedContact = formatContactInfo(contactInfo);

	await findContactOrFail(contactId);

	const updatedInfo = await contactRepository.update({
		contactInfo: formattedContact,
		contactId,
	});

	return updatedInfo;
};

const findContactOrFail = async (contactId: string) => {
	const existentContact = await contactRepository.findById(contactId);
	if (!existentContact) throw new NoContactError(contactId);

	return existentContact;
};

export {
	getContacts,
	createContact,
	editContact,
};
