
//Settings

const express = require('express');
const app = express();


app.get('/', (req, res) => res.send('Beating though Expressjs'));
app.listen(3000, () => console.log('Example heartbeat on port 3000'));