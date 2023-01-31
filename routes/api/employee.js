const express = require('express');
const router = express.Router();

//Load Employee model
const Employee = require('../../models/Employee');

// tests employee route
router.get('/test', (req, res) => res.send('employee route testing'));

//View All Employee
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.send(employees);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});

//View Employee by Id
router.get('/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        res.send(employee);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Add Employee
router.post('/', async (req, res) => {
    const data = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        location: req.body.location,
        salary: req.body.salary
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Edit Employee
router.put('/', async (req, res) => {
    try {
        const id = req.body._id;
        const data = req.body;
        const result = await Employee.updateOne({ "_id": id }, data);
        res.send(result);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Delete Employee
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await Employee.findOneAndDelete({ "_id": id }, data);
        res.send(result);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;