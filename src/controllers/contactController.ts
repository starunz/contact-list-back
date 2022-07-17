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
		const contacts = await contactService.createContact(contactInfo);
		
		return res.status(201).send(contacts);

	} catch (error) {
		next(error);
	}
}

export {
	getAllContacts,
	postContact,
};
