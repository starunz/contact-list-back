import connection from '../database/database.js';

const collection = 'health';

const findAll = async () => {
	const { mongoClient, db } = await connection();

	const health = await db.collection(collection).find({}).toArray();
	await mongoClient.close();

	return health;
};

const healthRepository = {
	findAll,
};

export {
	healthRepository
};
