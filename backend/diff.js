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
  let dirty = false;
  recent.data.map(e => {
    const diff = calculateDiff(e, data.map(d => d.data));
    if (diff != null) {
      result.diff.push(diff);
      dirty === false ? dirty = true : null;
    }
  });

  const diffCache = getDiffCache();
  if (dirty) {
    diffCache.unshift(result);
    setDiffCache(diffCache);
  }

  // console.log(`diff: ${JSON.stringify(diffCache, null, 2)}`);
  return diffCache;
}

module.exports = {
  getDiff,
};
