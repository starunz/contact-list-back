import '../setup.js';

import connection from './database.js';

import { contactsMock } from './mock/contactsMock.js';
import { helperMock } from './mock/helperMock.js';

const seed = async () => {
	const { mongoClient, db } = await connection();

	await db.collection('health').deleteMany({});
	await db.collection('health').insertOne(helperMock);

	await db.collection('contacts').deleteMany({});
	await db.collection('contacts').insertMany(contactsMock);

	console.log('Seed realizado com sucesso!!!');
	
	mongoClient.close();
};

seed();
