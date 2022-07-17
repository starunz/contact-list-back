import { faker } from '@faker-js/faker';

import connection from '../../src/database/database';

import { CreateContactBody } from '../../src/interfaces/contactInterface';

const collection = 'contacts';

const findContactByPhone = async (phone: string) => {
	const { mongoClient, db } = await connection();

	const contact = await db.collection(collection).findOne({ phone });
	
	await mongoClient.close();

	return contact;
};

const createContact = async (contactInfo?: CreateContactBody) => {
	if (!contactInfo) contactInfo = makeContactInfo({});
	
	const { mongoClient, db } = await connection();

	const inserted = await db.collection(collection).insertOne(contactInfo);
	
	await mongoClient.close();

	return inserted;
};

const makeContactInfo = (contactInfo: Partial<CreateContactBody>) => {
	const contact = {
		name: contactInfo.name || faker.name.findName(),
		phone: contactInfo.phone || faker.phone.number('###########'),
		email: contactInfo.email || faker.internet.email(),
		img: contactInfo.img || faker.image.avatar(),
	};

	return contact;
};

export {
	findContactByPhone,
	createContact,
	makeContactInfo,
};
