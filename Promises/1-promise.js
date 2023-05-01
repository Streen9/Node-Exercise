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

readData('../NPM_Instructions.txt')
    .then((result) => console.log(result))
    .catch((err) => console.log(err))