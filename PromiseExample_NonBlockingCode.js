const {readFile} = require(`fs`);

const readTextData = (filePath) => {
    return new  Promise((resolve, reject) => {
        readFile(filePath,`utf8`, (err, data) => {
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
};

readTextData(`./content/secondFile.txt`)
.then((data) => {
    console.log(data);
}).catch((err) => {
    console.error(err);
})

//Probable Chances of Callback hell.
// readFile('./content/firstFile.txt',`utf8`, (err, data) => {
//     if(err){
//         console.log(err);
//         return err;
//     }else{
//         console.log(data);
//     }
// })