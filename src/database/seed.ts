import '../setup.js';

import connection from './database.js';

const seed = async () => {
	const { mongoClient, db } = await connection();

	const healthInfo = { message: 'I\'m Alive!' };
	await db.collection('health').insertOne(healthInfo);
	
	mongoClient.close();
};

seed();
