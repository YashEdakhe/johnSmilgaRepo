const {createReadStream} = require('fs');

const stream = createReadStream(`./content/bigFile.txt`);

stream.on('data',(result) => {
  console.log(result.length);
})