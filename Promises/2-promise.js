const { readFile } = require('fs')

const readData = ((path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
})

const start = async () => {
    try{
        const first = await readData('../NPM_Instructions.txt')
        const second = await readData('../Event_loop/eventLoop.txt')
        console.log(first,'\n second file:\n',second)
    }
    catch(error){
        console.log(error)
    }
}

start()