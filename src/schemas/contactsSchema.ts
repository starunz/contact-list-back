import Joi from 'joi';

import { CreateContactBody } from '../interfaces/contactInterface.js';

const contactSchema = Joi.object<CreateContactBody>({
	name: Joi.string().min(2).max(40).required(),
	phone: Joi.string().min(8).max(9).required(),
	email: Joi.string().min(5).max(40).required(),
	img: Joi.string().required()
}).length(4);

export {
	contactSchema,
};
