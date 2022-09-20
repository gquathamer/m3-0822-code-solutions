const express = require('express');
const path = require('path');

const app = express();

const publidDirectory = path.join(__dirname, 'public');
console.log(publidDirectory);

const staticMiddleware = express.static(publidDirectory);

app.use(staticMiddleware);
app.listen(3000);
