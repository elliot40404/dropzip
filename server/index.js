if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false, limit: '150mb' }));
app.use(express.json())

app.get('/', (req, res) => {
    res.send('H E L L O');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on http://localhost:3000');
});