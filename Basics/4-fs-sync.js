const {readFileSync, writeFileSync} = require('fs')

writeFileSync('./writeFileSync.txt',`this is sending the data to you from : , ${__filename}`);

console.log(readFileSync('./writeFileSync.txt','utf-8'))


writeFileSync('./writeFileSync.txt',`\nnew line through appending`,{flag:"a"})

console.log('after appending : \n',readFileSync('./writeFileSync.txt','utf-8'))


