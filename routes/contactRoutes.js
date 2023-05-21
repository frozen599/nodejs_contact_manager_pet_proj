import express from 'express';

var contactRouter = express.Router();

contactRouter.get('/', (req, res) => {
    res.status(200).json({message: 'Get all contacts'});    
})

contactRouter.post('/', (req, res) => {
    res.status(200).json({message: 'Create contact'});
})

contactRouter.put('/:id', (req, res) => {
    res.status(200).json({message: `Update contact #${req.params.id}`});
})

contactRouter.delete('/:id', (req, res) => {
    res.status(200).json({message: `Delete contact #${req.params.id}`});
})

export {contactRouter};
