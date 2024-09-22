const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

let orders = [];

app.post('/orders', async (req, res) => {
    const { userId, products } = req.body;
    try {
        const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);

        const order = { id: orders.length + 1, user: userResponse.data, products };
        console.log('order',order)
        orders[orders.length] =order;

        res.status(201).json(order);
    } catch (error) {
        console.error('Error creating order:', error.message);
        res.status(500).json({ message: 'Error creating order' });
    }
});

app.listen(3002, () => {
    console.log('Order Service running on port 3002');
});
