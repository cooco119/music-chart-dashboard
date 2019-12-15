const { getCacheValue } = require('./dataHandler');

const calculateDiff = (song, history) => {
  const result = [];
  let lastRank = song.rank;
  for (const entry of history.reverse()) {
    for (const s of entry) {
      if (song.name === s.name) {
        result.push({
          name: song.name,
          artist: song.artist,
          diff: s.rank - lastRank,
        });
        lastRank = s.rank;
      }
    }
  }

  return result;
}

const getDiff = (start, type) => {
  const data = getCacheValue(type).filter(e => new Date(e.time) > new Date(start));
  const recent = data.pop();

  const result = [];
  recent.data.map(e => result.push(calculateDiff(e, data.map(d => d.data))));

  return result;
}

module.exports = {
  getDiff,
};
