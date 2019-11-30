const fs = require('fs');

const melon = require('./util/melon');
const bugs = require('./util/bugs');
const genie = require('./util/genie');
const naver = require('./util/naver');

const MAX_CACHE_LENGTH = 100000;
const SWAP_FILE = 'swap.json';
const cache = [];

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

module.exports = {
    getRecentData,
    updateCache,
    getCache,
}
