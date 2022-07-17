import { NotFoundError } from './httpErrors/index.js';

class NoContactError extends NotFoundError {
	constructor(contactId: string) {
		super(`Not found contact with '${contactId}' id!`);
		this.name = 'NoContactError';
	}
}

export default NoContactError;
