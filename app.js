const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors');

const app=express();
const employee =require('./routes/api/employee');
const user =require('./routes/api/user');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const path = require('path');
app.use(express.static(path.join(__dirname,'/build')));


// Connect Database
connectDB();
const port =8052;

app.use('/api/employee',employee);
app.use('/api/user',user);
app.get('/*', function(req, res) {res.sendFile(path.join(__dirname,'/build/index.html')); }); 
app.listen(port, ()=> console.log(`Server running on port ${port}`));