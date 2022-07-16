import { NextFunction, Request, Response } from 'express';

import { contactService } from '../services/index.js';

async function getAllContacts(req: Request, res: Response, next: NextFunction) {
	try {
		const contacts = await contactService.getContacts();
		
		return res.status(200).send(contacts);

	} catch (error) {
		next(error);
	}
}

export {
	getAllContacts,
};
