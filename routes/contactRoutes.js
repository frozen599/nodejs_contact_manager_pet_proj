import express from 'express';
import { 
        getContacts,
        getContact, 
        createContact, 
        updateContact, 
        deleteContact } 
    from '../controllers/contactController.js';

var contactRouter = express.Router();

contactRouter.get('/', getContacts);

contactRouter.post('/', createContact);

contactRouter.get('/:id', getContact);

contactRouter.put('/:id', updateContact);

contactRouter.delete('/:id', deleteContact);

export {contactRouter};
