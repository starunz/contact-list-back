
import connection from './database.js';

const seed = async () => {
	const { mongoClient, db } = await connection();
	
	await db.collection('health').insertOne( { message: 'I\'m Alive!' } );
	
	mongoClient.close();
};

seed();