import supertest from 'supertest';

import app from '../../src/app.js';

import {
	createContact,
	findContactByPhone,
	makeContactInfo
} from '../factories/contactsFactory.js';
import { disconnectServer, deleteContacts } from '../factories/dbFactory.js';

describe('GET /contacts', () => {
	beforeEach(deleteContacts);

	it('should return 200 and contacts list', async () => {
		const contactsPromises = [createContact(), createContact()];
		await Promise.all(contactsPromises);

		const response = await supertest(app).get('/contacts');
		const { status, body } = response;

		expect(status).toEqual(200);
		expect(body).not.toBeNull();
		expect(body[0].name <= body[1].name).toBeTruthy();
	});
});

describe('POST /contacts', () => {
	beforeEach(deleteContacts);

	it('should return 201 and create contact', async () => {
		const contactBody = makeContactInfo({});

		const response = await supertest(app).post('/contacts').send(contactBody);
		const { status } = response;
		const createdContact = await findContactByPhone(contactBody.phone);

		expect(status).toEqual(201);
		expect(createdContact).not.toBeNull();
	});
});

describe('PUT /contacts/:contactId', () => {
	beforeEach(deleteContacts);

	it('should return 200 and update contact', async () => {
		const contactBody = makeContactInfo({});
		const creationInfo = await createContact();
		const newContactBody = {
			...contactBody,
			name: 'New test name',
		};

		const response = await supertest(app).put(`/contacts/${creationInfo.insertedId}`).send(newContactBody);
		const { status } = response;
		const updatedContact = await findContactByPhone(contactBody.phone);

		expect(status).toEqual(200);
		expect(updatedContact.name).not.toEqual(contactBody.name);
	});
});

describe('DELETE /contacts/:contactId', () => {
	beforeEach(deleteContacts);

	it('should return 200 and delete contact', async () => {
		const contactBody = makeContactInfo({});
		const creationInfo = await createContact();

		const response = await supertest(app).delete(`/contacts/${creationInfo.insertedId}`);
		const { status } = response;
		const deletedContact = await findContactByPhone(contactBody.phone);

		expect(status).toEqual(200);
		expect(deletedContact).toBeNull();
	});
});

afterAll(async () => {
	await deleteContacts();
	await disconnectServer();
});
