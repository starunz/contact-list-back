import connection from '../database/database.js';

import { makeMongoId } from './helpers/idHelper.js';

import {
	CreateContactBody,
	UpdateContactInfo
} from '../interfaces/contactInterface.js';

const collection = 'contacts';

const findAll = async () => {
	const { mongoClient, db } = await connection();

	const contacts = await db.collection(collection).find({}).sort({ name: 1 }).toArray();
	
	await mongoClient.close();

	return contacts;
};

const findById = async (id: string) => {
	const _id = makeMongoId(id);
	const { mongoClient, db } = await connection();

	const contact = await db.collection(collection).findOne({ _id });
	
	await mongoClient.close();

	return contact;
};

const findByPhone = async (phone: string) => {
	const { mongoClient, db } = await connection();

	const contact = await db.collection(collection).findOne({ phone });
	
	await mongoClient.close();

	return contact;
};

const insert = async (contactInfo: CreateContactBody) => {
	const { mongoClient, db } = await connection();

	const inserted = await db.collection(collection).insertOne(contactInfo);
	
	await mongoClient.close();

	return inserted;
};

const update = async (updateContactInfo: UpdateContactInfo) => {
	const { contactInfo, contactId } = updateContactInfo;
	const _id = makeMongoId(contactId);

	const { mongoClient, db } = await connection();

	const updated = await db.collection(collection).updateOne(
		{ _id },
		{ $set: contactInfo },
	);
	
	await mongoClient.close();

	return updated;
};

const deleteOne = async (contactId: string) => {
	const _id = makeMongoId(contactId);

	const { mongoClient, db } = await connection();

	const updated = await db.collection(collection).deleteOne({ _id });
	
	await mongoClient.close();

	return updated;
};

const contactRepository = {
	findAll,
	findById,
	findByPhone,
	insert,
	update,
	deleteOne,
};

export {
	contactRepository
};
