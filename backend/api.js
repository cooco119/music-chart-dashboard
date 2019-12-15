const express = require('express');
const { getCache } = require('./dataHandler');
const apiRouter = express.Router();

let cache = null;

const getCacheValue = (key) => {
    cache = getCache();
    switch (key) {
        case 'MELON':
            return cache.map(e => ({ time: e.time, data: e.data.melonData }));
        case 'BUGS':
            return cache.map(e => ({ time: e.time, data: e.data.melonData }));
        case 'NAVER':
            return cache.map(e => ({ time: e.time, data: e.data.melonData }));
        case 'GENIE':
            return cache.map(e => ({ time: e.time, data: e.data.melonData }));
        case 'ALL':
            return cache;
        default:
            throw new Error('No key for api cache value');
    }
};

apiRouter.get('/data/melon', (req, res) => {
    const dataset = getCacheValue('MELON');
    res.json(dataset);
});

apiRouter.get('/data/bugs', (req, res) => {
    const dataset = getCacheValue('BUGS');
    res.json(dataset);
});

apiRouter.get('/data/naver', (req, res) => {
    const dataset = getCacheValue('NAVER');
    res.json(dataset);
});

apiRouter.get('/data/genie', (req, res) => {
    const dataset = getCacheValue('GENIE');
    res.json(dataset);
});

apiRouter.get('/data/all', (req, res) => {
    const dataset = getCacheValue('ALL');
    res.json(dataset);
});

apiRouter.get('/data/melon/recent', (req, res) => {
    const dataset = getCacheValue('MELON');
    res.json(dataset[dataset.length - 1]);
});

apiRouter.get('/data/bugs/recent', (req, res) => {
    const dataset = getCacheValue('BUGS');
    res.json(dataset[dataset.length - 1]);
});

apiRouter.get('/data/naver/recent', (req, res) => {
    const dataset = getCacheValue('NAVER');
    res.json(dataset[dataset.length - 1]);
});

apiRouter.get('/data/genie/recent', (req, res) => {
    const dataset = getCacheValue('GENIE');
    res.json(dataset[dataset.length - 1]);
});

apiRouter.get('/data/all/recent', (req, res) => {
    const dataset = getCacheValue('ALL');
    console.log(getCacheValue('ALL'));
    res.json(dataset[dataset.length - 1]);
});

module.exports = {
    apiRouter,
};
