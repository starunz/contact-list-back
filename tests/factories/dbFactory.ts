import connection from '../../src/database/database';

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

export {
	disconnectServer,
	deleteHealth,
	deleteContacts,
};
