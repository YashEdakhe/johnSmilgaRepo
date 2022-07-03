const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readTextDataPromise = util.promisify(readFile);
// const writeTextDataPromise = util.promisify(writeFile);

const start = async () => {
  try {
      // const firstFile = await readTextDataPromise(`./content/firstFile.txt`, `utf8`);
      const firstFile = await readFile(`./content/firstFile.txt`, `utf8`);
      // const secondFile = await readTextDataPromise(`./content/secondFile.txt`, `utf8`);
      const secondFile = await readFile(`./content/secondFile.txt`, `utf8`);
      console.log(firstFile, secondFile);
    // await writeTextDataPromise(`./content/thirdFile.txt`, `This is Awesome!:- ${firstFile} and ${secondFile}`);
    await writeFile(`./content/thirdFile.txt`, `This is Awesome!:- ${firstFile} and ${secondFile}`);
  } catch (err) {
    console.log(err);
  }
};

start();
