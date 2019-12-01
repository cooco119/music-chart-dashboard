const express = require('express');
const api = require('./api');
const cors = require('cors');
const cron = require('node-cron');
const { swapIn, updateCache } = require('./dataHandler');

const PORT = 5000;

const main = async () => {
    swapIn();
    await updateCache();
    cron.schedule('1 * * * *', () => {
        updateCache();
    });

    const app = express();
    app.use(cors());
    app.use('/api/v1', api.apiRouter);
    app.listen(PORT, () => {
        console.log(`Server listening to ${PORT}`);
    })
};

main();
