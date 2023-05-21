// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getContacts = (req, res) => {
    res.status(200).json({message: 'Get all contacts'}); 
};

// @desc Get one contact
// @route GET /api/contacts/:id
// @access public
const getContact = (req, res) => {
    res.status(200).json({message: `Get contact #${req.params.id}`}); 
};


// @desc Create new contact
// @route POST /api/contacts
// @access public
const createContact = (req, res) => {
    res.status(200).json({message: 'Create new contact'}); 
};

// @desc Update contact
// @route PUT /api/contacts/:id
// @access public
const updateContact = (req, res) => {
    res.status(200).json({message: `Update contact #${req.params.id}`});
};

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = (req, res) => {
    res.status(200).json({message: `Delete contact #${req.params.id}`});
};

export { 
    getContact,
    getContacts, 
    createContact, 
    updateContact, 
    deleteContact 
};