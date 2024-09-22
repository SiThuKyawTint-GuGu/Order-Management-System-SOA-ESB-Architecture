const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// Route to User Service
app.post('/users', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3001/users', req.body);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error communicating with User Service' });
    }
});

// Route to Order Service
app.post('/orders', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3002/orders', req.body);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error communicating with Order Service' });
    }
});

// Route to Payment Service
app.post('/payments', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3003/payments', req.body);
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error communicating with Payment Service' });
    }
});

app.listen(3000, () => {
    console.log('ESB running on port 3000');
});
