import connection from '../../src/database/database';
import { ObjectId } from 'mongodb';

const disconnectServer = async () => {
	const { mongoClient } = await connection();

	await mongoClient.close();
};

const deleteHealth = async () => {
	const { mongoClient, db } = await connection();

	await db.collection('health').deleteMany({});

	await mongoClient.close();
};

const deleteContacts = async () => {
	const { mongoClient, db } = await connection();

	await db.collection('contacts').deleteMany({});

	await mongoClient.close();
};

const generateMongoId = (idStr?: string) => {
	const _id = idStr ? new ObjectId(idStr) : new ObjectId();

	return _id;
};

export {
	disconnectServer,
	deleteHealth,
	deleteContacts,
	generateMongoId,
};
