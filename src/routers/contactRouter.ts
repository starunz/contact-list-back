import { Router } from 'express';

// import * as schemaValidation from '../middlewares/schemaValidation/index.js';

import { contactController } from '../controllers/index.js';

// import { contactSchema, contactIdSchema } from '../schemas/contactSchema.js';

const contactRouter = Router();

contactRouter.get('/', contactController.getAllContacts);

export default contactRouter;
