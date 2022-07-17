import { NextFunction, Request, Response } from 'express';

import { contactService } from '../services/index.js';

import { CreateContactBody } from '../interfaces/contactInterface.js';

async function getAllContacts(req: Request, res: Response, next: NextFunction) {
	try {
		const contacts = await contactService.getContacts();
		
		return res.status(200).send(contacts);

	} catch (error) {
		next(error);
	}
}

async function postContact(req: Request, res: Response, next: NextFunction) {
	const contactInfo = req.body as CreateContactBody;

	try {
		const createdInfo = await contactService.createContact(contactInfo);
		
		return res.status(201).send(createdInfo);

	} catch (error) {
		next(error);
	}
}

async function updateContact(req: Request, res: Response, next: NextFunction) {
	const contactInfo = req.body as CreateContactBody;
	const contactId = req.params.contactId;

	try {
		const updatedInfo = await contactService.editContact({
			contactInfo,
			contactId,
		});

		return res.status(200).send(updatedInfo);

	} catch (error) {
		next(error);
	}
}

async function deleteContact(req: Request, res: Response, next: NextFunction) {
	const contactId = req.params.contactId;

	try {
		const deletedInfo = await contactService.removeContact(contactId);

		return res.status(200).send(deletedInfo);

	} catch (error) {
		next(error);
	}
}

export {
	getAllContacts,
	postContact,
	updateContact,
	deleteContact,
};
