const express = require('express');
const api = require('./api');
const cors = require('cors');
const cron = require('node-cron');
const { swapIn, updateCache } = require('./dataHandler');

const PORT = 5000;

const main = async () => {
    swapIn();
    cron.schedule('1 * * * *', () => {
        updateCache();
    });

    const app = express();
    app.use('/api/v1', api.apiRouter);
    app.use(cors());
    app.listen(PORT, () => {
        console.log(`Server listening to ${PORT}`);
    })
};

main();
