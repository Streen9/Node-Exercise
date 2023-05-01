const { readFile, writeFile } = require('fs')
const util = require('util')


const readFileUtil = util.promisify(readFile)
const writeFileUtil = util.promisify(writeFile)

const start = async () => {
    try{
        const firstUtil = await readFileUtil('../NPM_Instructions.txt','utf-8')
        const secondUtil = await readFileUtil('../Event_loop/eventLoop.txt','utf-8')

        console.log(firstUtil,'\n second file:\n',secondUtil)
    }
    catch(error){
        console.log(error)
    }
}

start()