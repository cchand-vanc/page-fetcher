const request = require('request');
const args = process.argv.slice(2);
const fs = require('fs');
let url = args[0];
let localPath = args[1];

request(url, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  fs.writeFile(localPath, body, err => {
    if (err) {
      console.error(err);
    } else {
      let stats = fs.statSync(args[1]);
      let fileSize = stats.size;
      console.log(`Downloaded and saved ${fileSize} bytes to ${localPath}`);
    }
  });
});
