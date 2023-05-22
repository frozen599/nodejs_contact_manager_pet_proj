import express from 'express';
import bodyParser from 'body-parser';
import { 
        getContacts,
        getContact, 
        createContact, 
        updateContact, 
        deleteContact } 
    from '../controllers/contactController.js';


var jsonParser = bodyParser.json();
var contactRouter = express.Router();

contactRouter.get('/', getContacts);

contactRouter.post('/', jsonParser, createContact);

contactRouter.get('/:id', getContact);

contactRouter.put('/:id', jsonParser, updateContact);

contactRouter.delete('/:id', deleteContact);

export {contactRouter};
