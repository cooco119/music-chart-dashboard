const melon = require('./util/genie');
const fs = require('fs');

melon.getData().then(result => {
    fs.writeFileSync('./test2.json', JSON.stringify(result, null, 2));
})
