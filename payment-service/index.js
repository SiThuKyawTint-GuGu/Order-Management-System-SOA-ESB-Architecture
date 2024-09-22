const express = require('express');
const app = express();
app.use(express.json());

let payments = [];

app.post('/payments', (req, res) => {
    const { orderId, amount, method } = req.body;
    const payment = { id: payments.length + 1, orderId, amount, method, status: 'success' };
    payments[payments.length] = payment;
    res.status(201).json(payment);
});

app.listen(3003, () => {
    console.log('Payment Service running on port 3003');
});
