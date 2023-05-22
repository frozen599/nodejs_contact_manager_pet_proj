import asyncHandler from 'express-async-handler';
import Contact from '../models/contactModel.js'

// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getContacts = asyncHandler( async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json({contacts}); 
});

// @desc Get one contact
// @route GET /api/contacts/:id
// @access public
const getContact = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Get contact #${req.params.id}`}); 
});


// @desc Create new contact
// @route POST /api/contacts
// @access public
const createContact = asyncHandler( async (req, res) => {
    console.log(req);
    const { name, phone_number } = req.body;
    if (!name || !phone_number) {
        res.status(400);
        console.log(req);
        throw new Error('All fields are required');
    }
    res.status(200).json({message: 'Create new contact'}); 
});

// @desc Update contact
// @route PUT /api/contacts/:id
// @access public
const updateContact = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Update contact #${req.params.id}`});
});

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Delete contact #${req.params.id}`});
});

export { 
    getContact,
    getContacts, 
    createContact, 
    updateContact, 
    deleteContact 
};