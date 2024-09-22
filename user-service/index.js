const express = require('express');
const app = express();
app.use(express.json());

let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
];

app.post('/users', (req, res) => {
    const { id, name } = req.body;
    const newUser = { id, name };
    users[users.length] = newUser;
    res.status(201).json(newUser);
});

app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.listen(3001, () => {
    console.log('User Service running on port 3001');
});
