const fs = require('fs');

fs.readFile('../easy/a.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('An error occurred:', err);
        return;
    }
    console.log(data);
});