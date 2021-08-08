document.addEventListener('DOMContentLoaded', init);
function init() {
    import * as https from https;
    const url = 'https://random-d.uk/';
    https.get(url, response => {
        response.on('data', (data) => {
            console.log(data.toString());
        });
    });
}
/*const fs = require('fs');
const http = require('http');
const https = require('https');
const fetch = require('node-fetch');
fs.writeFileSync('a.txt', 'yeet');*/
