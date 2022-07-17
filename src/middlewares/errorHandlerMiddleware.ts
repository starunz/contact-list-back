import { Request, Response, NextFunction } from 'express';

import { isPersonalizedError } from '../utils/errorsName.js';

const errorHandlerMiddleware = (err, req: Request, res: Response, next: NextFunction) => {
	const { name: errorName, message, status } = err;

	if (isPersonalizedError(errorName)) return res.status(status).send(message);

	if (errorName === 'BSONTypeError') return res.status(400).send('Invalid id format!');
	
	next(err);
};

export default errorHandlerMiddleware;
