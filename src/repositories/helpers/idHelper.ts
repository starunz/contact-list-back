import { ObjectId } from 'mongodb';

const makeMongoId = (id: string) => {
	return new ObjectId(id);
};

export {
	makeMongoId,
};
