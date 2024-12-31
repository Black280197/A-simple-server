const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/', (req, res) => {
    console.log('Body received:', req.body);
    res.send('Request received!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})