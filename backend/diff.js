const { getCacheValue, getDiffCache, setDiffCache } = require('./dataHandler');

const calculateDiff = (song, history) => {
  let result = null;
  let lastRank = song.rank;
  for (const entry of history.reverse()) {
    for (const s of entry) {
      if (song.name === s.name && song.artist === s.artist) {
        result = {
          name: song.name,
          artist: song.artist,
          diff: s.rank - lastRank,
        };
        lastRank = s.rank;
      }
    }
  }

  return result;
}

const getDiff = (start, type) => {
  const data = getCacheValue(type).filter(e => new Date(e.time) > new Date(start));
  const recent = data.pop();

  const result = {
    time: (new Date()).toISOString(),
    diff: []
  };
  
  recent.data.map(e => {
    const diff = calculateDiff(e, data.map(d => d.data));
    if (diff != null) {
      result.diff.push(diff);
    }
  });

  const diffCache = getDiffCache();
  if (diffCache.length > 0 && dayPassed(diffCache[0], result)) {
    diffCache.unshift(result);
    if (diffCache.length > 7) {
      diffCache.pop();
    }
    setDiffCache(diffCache);
  }

  // console.log(`diff: ${JSON.stringify(diffCache, null, 2)}`);
  return diffCache;
}

const dayPassed = (cache, result) => {
  const cacheDate = new Date(cache.time);
  const resultDate = new Date(result.time);

  const dateDiff = resultDate - cacheDate;
  if (Math.floor(dateDiff / (1000 * 60 * 60 * 24)) >= 1) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  getDiff,
};
