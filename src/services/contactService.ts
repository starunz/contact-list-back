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

const editContact = async (updateContactInfo: UpdateContactInfo) => {
	const { contactInfo, contactId } = updateContactInfo;
	
	const formattedContact = formatContactInfo(contactInfo);

	await findContactOrFail(contactId);
	await findNoOtherContactOrFail(contactId, formattedContact.phone);

	const updatedInfo = await contactRepository.update({
		contactInfo: formattedContact,
		contactId,
	});

	return updatedInfo;
};

const removeContact = async (contactId: string) => {
	await findContactOrFail(contactId);

	const deletedInfo = await contactRepository.deleteOne(contactId);

	return deletedInfo;
};

const findNoContactOrFail = async (phoneNumber: string) => {
	const existentContact = await contactRepository.findByPhone(phoneNumber);
	if (existentContact) throw new ExistentContactError(phoneNumber);

	return existentContact;
};

const findContactOrFail = async (contactId: string) => {
	const existentContact = await contactRepository.findById(contactId);
	if (!existentContact) throw new NoContactError(contactId);

	return existentContact;
};

const findNoOtherContactOrFail = async (id: string, phoneNumber: string) => {
	const existentContact = await contactRepository.findByPhone(phoneNumber);
	const isSameUser = Boolean(existentContact?._id.toString() === id);

	if (existentContact && !isSameUser) throw new ExistentContactError(phoneNumber);

	return existentContact;
};

export {
	getContacts,
	createContact,
	editContact,
	removeContact,
};
