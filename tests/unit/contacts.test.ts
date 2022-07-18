import { jest } from '@jest/globals';

import { contactService } from '../../src/services/index.js';

import { contactRepository } from '../../src/repositories/index.js';

import { clearMocks } from '../factories/jestUtilsFactory.js';
import { makeContactInfo } from '../factories/contactsFactory.js';
import { generateMongoId } from '../factories/dbFactory.js';

import { ExistentContactError, NoContactError } from '../../src/errors/index.js';

const sut = contactService;

describe('contactService: createContact', () => {
	beforeEach(clearMocks);
	
	it('should throw conflict error if contact number already registered', async () => {
		const contactBody = makeContactInfo({});
		const _id = generateMongoId();

		jest.spyOn(contactRepository, 'findByPhone')
			.mockResolvedValueOnce({ ...contactBody, _id });
		
		const result = sut.createContact(contactBody);
		await expect(result).rejects.toThrowError(ExistentContactError);
	});
});

describe('contactService: editContact', () => {
	beforeEach(clearMocks);
	
	it('should throw not found error if contact with id no exists', async () => {
		const contactInfo = makeContactInfo({});
		const contactId = generateMongoId().toString();

		jest.spyOn(contactRepository, 'findById')
			.mockResolvedValueOnce(null);
		
		const result = sut.editContact({ contactInfo, contactId });
		await expect(result).rejects.toThrowError(NoContactError);
	});

	it('should throw conflict error if contact with number already exists', async () => {
		const contactInfo = makeContactInfo({});
		const _id = generateMongoId();
		const other_id = generateMongoId();
		const contactId = _id.toString();

		jest.spyOn(contactRepository, 'findById')
			.mockResolvedValueOnce({ ...contactInfo, _id });
		jest.spyOn(contactRepository, 'findByPhone')
			.mockResolvedValueOnce({ ...contactInfo, _id: other_id });
		
		const result = sut.editContact({ contactInfo, contactId });
		await expect(result).rejects.toThrowError(ExistentContactError);
	});
});

describe('contactService: removeContact', () => {
	beforeEach(clearMocks);
	
	it('should throw not found error if contact with id not exists', async () => {
		const contactId = generateMongoId().toString();

		jest.spyOn(contactRepository, 'findById')
			.mockResolvedValueOnce(null);
		
		const result = sut.removeContact(contactId);
		await expect(result).rejects.toThrowError(NoContactError);
	});
});
