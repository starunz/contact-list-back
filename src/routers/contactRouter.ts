import { Router } from 'express';

import * as schemaValidation from '../middlewares/schemaValidation/index.js';

import { contactController } from '../controllers/index.js';

import { contactIdSchema, contactSchema } from '../schemas/contactSchema.js';

const contactRouter = Router();

contactRouter.get('/', contactController.getAllContacts);

contactRouter.post(
	'/',
	schemaValidation.bodyMiddleware(contactSchema),
	contactController.postContact,
);

contactRouter.put(
	'/:contactId',
	schemaValidation.paramsMiddleware(contactIdSchema),
	schemaValidation.bodyMiddleware(contactSchema),
	contactController.updateContact,
);

export default contactRouter;
