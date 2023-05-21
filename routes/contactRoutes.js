import express, { Router } from 'express';

var router = express.Router();

router.route("/", (req, res) => {
    res.status(200).json({message: "Get all contacts"});    
})

router.route("/", (req, res) => {
    res.status(200).json({message: "Create contact"});
}) 

router.route("/:id", (req, res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`});
})

router.delete("/:id", (req, res) => {
    res.status(200).json({message: `Delete contact ${req.params.id}`});
})

module.exports = router;
