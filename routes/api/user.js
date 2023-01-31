const express = require('express');
const router = express.Router();

const User = require('../../models/User');

router.post('/login', async (req, resp) => {
    try
    {
        const data = await User.findOne({ user: req.body.user, password: req.body.password });
        if (data) {
            resp.send(true);
        }
        else {
            resp.send(false);
        }
    }
    catch(error) {
        resp.status(500).json({message:error.message})
    }
});

module.exports = router;