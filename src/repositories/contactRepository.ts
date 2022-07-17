import connection from '../database/database.js';

import { CreateContactBody } from '../interfaces/contactInterface.js';

const collection = 'contacts';

const findAll = async () => {
	const { mongoClient, db } = await connection();

	const contacts = await db.collection(collection).find({}).sort({ name: 1 }).toArray();
	
	await mongoClient.close();

	return contacts;
};

const findByPhone = async (phone: string) => {
	const { mongoClient, db } = await connection();

	const contacts = await db.collection(collection).findOne({ phone });
	
	await mongoClient.close();

	return contacts;
};

const insert = async (contactInfo: CreateContactBody) => {
	const { mongoClient, db } = await connection();

	const contacts = await db.collection(collection).insertOne(contactInfo);
	
	await mongoClient.close();

	return contacts;
};

const contactRepository = {
	findAll,
	findByPhone,
	insert,
};

export {
	contactRepository
};
