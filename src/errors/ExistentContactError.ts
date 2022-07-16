import { ConflictError } from './httpErrors/index.js';

class ExistentContactError extends ConflictError {
	constructor(phoneNumber: string) {
		super(`Contact with phone number '${phoneNumber}' already registered!`);
		this.name = 'ExistentContactError';
	}
}

export default ExistentContactError;
