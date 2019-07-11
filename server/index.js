import express from 'express';

const app = express();

app.use('/', (req, res) => res.send('hello world'));

// eslint-disable-next-line no-console
app.listen(5000, () => console.log('Runing on port 5000'));

module.exports = app;
