const {readFile, writeFile} =  require("fs");

readFile(`./content/firstFile.txt`,`utf8`,(err,result) => {
    if(err){
        console.log(err);
        return;
    }
    const fileContent1 = result;
    console.log(fileContent1);
    readFile(`./content/secondFile.txt`,`utf8`,(err,result) => {
        if(err){
            console.log(err);
            return;
        }
        const fileContent2 = result;
        console.log(fileContent2);
        writeFile(`./content/fileSync.txt`,`Here is the ExpectedResult ${fileContent2}+${fileContent1}`,(err, result)=>{
            if(err) {console.log(err); return err;}
            console.log(`result Declared`);
        })
    })
})