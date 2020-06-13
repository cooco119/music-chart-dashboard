const fs = require('fs');

const melon = require('./util/melon');
const bugs = require('./util/bugs');
const genie = require('./util/genie');
const naver = require('./util/naver');

const MAX_CACHE_LENGTH = 100000;
const SWAP_FILE = 'swap.json';
let cache = [];
let diffCache = [];

const CACHE_TYPE = {
    MELON: 'MELON',
    BUGS: 'BUGS',
    GENIE: 'GENIE',
    NAVER: 'NAVER',
};

const getRecentData = async () => {
    const melonData = await melon.getData();
    const bugsData = await bugs.getData();
    const genieData = await genie.getData();
    const naverData = await naver.getData();

    return {
        melonData,
        bugsData,
        genieData,
        naverData,
    };
};

const swapOut = (data) => {
    const swap = JSON.parse(fs.readFileSync(`./data/${SWAP_FILE}`));
    swap.push(data);
    fs.writeFileSync(`./data/${SWAP_FILE}`, JSON.stringify(swap, null, 2));
};

const swapIn = () => {
    const swap = JSON.parse(fs.readFileSync(`./data/${SWAP_FILE}`));
    cache = swap;
}

const updateCache = async () => {
    const data = await getRecentData();
    const now = new Date();
    if (cache.length > MAX_CACHE_LENGTH) {
        const evictTarget = cache.shift();
        swapOut(evictTarget);
    }
    cache.push({
        time: now.getTime(),
        data,
    });
};

const getCache = () => {
    return cache;
}

const getCacheValue = (key) => {
    switch (key) {
        case CACHE_TYPE.MELON:
            return cache.map(e => ({ time: e.time, data: e.data.melonData.data }));
        case CACHE_TYPE.BUGS:
            return cache.map(e => ({ time: e.time, data: e.data.bugsData.data }));
        case CACHE_TYPE.NAVER:
            return cache.map(e => ({ time: e.time, data: e.data.naverData.data }));
        case CACHE_TYPE.GENIE:
            return cache.map(e => ({ time: e.time, data: e.data.genieData.data }));
        case 'ALL':
            return cache;
        default:
            throw new Error('No key for api cache value');
    }
};

const setDiffCache = (data) => {
    diffCache = data;
};

const getDiffCache = () => {
    return diffCache;
};

module.exports = {
    getRecentData,
    updateCache,
    getCache,
    getCacheValue,
    swapIn,
    setDiffCache,
    getDiffCache,
    CACHE_TYPE,
}
