const {readFile, writeFile} = require('fs').promises

const start = async () => {
    try{
        const first = await readFile('../NPM_Instructions.txt','utf-8')
        await writeFile('./promise.txt','testing to appending\n',
        {flag:'a'})
        console.log(first)
    }
    catch(error){
        console.log(error)
    }
}

start()