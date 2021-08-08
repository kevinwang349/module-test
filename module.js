function exe() {
    import * as https from https;
    //const https = require('https');
    const url = 'https://random-d.uk/';
    https.get(url, response => {
        response.on('data', (data) => {
            console.log(data.toString());
        });
    });
}