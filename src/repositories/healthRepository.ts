import connection from '../database/database.js';

const findAll = async () => {
	const { mongoClient, db } = await connection();

	const health = await db.collection('health').find({}).toArray();
	await mongoClient.close();

	return health;
};

const healthRepository = {
	findAll,
};

export {
	healthRepository
};
