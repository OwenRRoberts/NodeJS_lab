const path = require('path');
const fs = require('fs');

const dataPath = path.join(__dirname, '../data.json');

fs.readFile(dataPath, {
    encoding: 'utf8'
}, (err, data) => {
    console.log(data);
})
