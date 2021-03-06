const express = require('express');
const api = require('./api');
const cors = require('cors');
const cron = require('node-cron');
const { swapIn, updateCache } = require('./dataHandler');

const PORT = 5000;

const main = async () => {
    swapIn();
    await updateCache();
    cron.schedule('0 13 * * *', () => {
        updateCache();
        console.log(`[${(new Date()).toISOString()}] Updating cache`);
    });
    
    const app = express();
    app.use(cors());
    app.use('/api/v1', api.apiRouter);
    app.listen(PORT, () => {
        console.log(`Server listening to ${PORT}`);
    })
};

main();
