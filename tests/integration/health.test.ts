import supertest from 'supertest';

import app from '../../src/app.js';

import { disconnectServer, deleteHealth } from '../factories/dbFactory.js';

describe('GET /health', () => {
	beforeEach(deleteHealth);

	it('should verify if tests are alive', () => {
		expect(1).toEqual(1);
	});

	it('should return 200 for server alive', async () => {
		const response = await supertest(app).get('/health');
		const { status, body } = response;

		expect(status).toEqual(200);
		expect(body).not.toBeNull();
	});
});

afterAll(async () => {
	await deleteHealth();
	await disconnectServer();
});
