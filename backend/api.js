const express = require('express');
const { getCacheValue, CACHE_TYPE } = require('./dataHandler');
const { getDiff } = require('./diff');
const apiRouter = express.Router();

apiRouter.get('/data/melon/recent', (req, res) => {
    const dataset = getCacheValue(CACHE_TYPE.MELON);
    res.json(dataset[dataset.length - 1]);
});

apiRouter.get('/data/bugs/recent', (req, res) => {
    const dataset = getCacheValue(CACHE_TYPE.BUGS);
    res.json(dataset[dataset.length - 1]);
});

apiRouter.get('/data/naver/recent', (req, res) => {
    const dataset = getCacheValue(CACHE_TYPE.NAVER);
    res.json(dataset[dataset.length - 1]);
});

apiRouter.get('/data/genie/recent', (req, res) => {
    const dataset = getCacheValue(CACHE_TYPE.GENIE);
    res.json(dataset[dataset.length - 1]);
});

apiRouter.get('/data/all/recent', (req, res) => {
    const dataset = getCacheValue('ALL');
    res.json(dataset[dataset.length - 1]);
});

apiRouter.get('/data/melon/diff', (req, res) => {
    const { start } = req.query;
    const diff = getDiff(start, CACHE_TYPE.MELON);
    res.json({ diff });
});

apiRouter.get('/data/bugs/diff', (req, res) => {
    const { start } = req.query;
    const diff = getDiff(start, CACHE_TYPE.BUGS);
    res.json({ diff });
});

apiRouter.get('/data/naver/diff', (req, res) => {
    const { start } = req.query;
    const diff = getDiff(start, CACHE_TYPE.NAVER);
    res.json({ diff });
});

apiRouter.get('/data/genie/diff', (req, res) => {
    const { start } = req.query;
    const diff = getDiff(start, CACHE_TYPE.GENIE);
    res.json({ diff });
});

module.exports = {
    apiRouter,
};
