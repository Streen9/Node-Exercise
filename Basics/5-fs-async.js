const {readFile, writeFile, read} = require('fs')

const fileData = writeFile('./writeFileaSync.txt','This is async file created write file', (err)=>{

    if(err){
        console.log(err)
        return false;
    }
    //console.log(res)
})

const fileDataappend = writeFile('./writeFileaSync.txt','\n appending new line by flag {flag:\'a\'}',{flag:'a'}, (err)=>{

    if(err){
        console.log(err)
        return false;
    }
    //console.log(res)
})

const readingFile = readFile('./writeFileaSync.txt','utf-8',(err,res) => {
    if(err){
        return false;
    }
    console.log(res)
})

//sync will go line by line it will hold until the task is completed

//async will move to next task if certain task will takes time it is preferred to do if we are doing high memory