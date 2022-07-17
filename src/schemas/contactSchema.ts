import Joi from 'joi';

import { CreateContactBody } from '../interfaces/contactInterface.js';

const contactSchema = Joi.object<CreateContactBody>({
	name: Joi.string().min(2).max(40).required(),
	phone: Joi.string().min(10).max(11).required(),
	email: Joi.string().email().max(40).required(),
	img: Joi.string().required()
}).length(4);

export {
	contactSchema,
};
