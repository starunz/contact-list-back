import connection from '../database/database.js';

const findAll = async () => {
	const { mongoClient, db } = await connection();

	const contacts = await db.collection('contacts').find({}).sort({ name: 1 }).toArray();
	
	await mongoClient.close();

	return contacts;
};

const contactRepository = {
	findAll,
};

export {
	contactRepository
};
