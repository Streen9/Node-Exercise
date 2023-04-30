//built-in module

const os = require('os')

// console.log(os.version())

//console.log(os.userInfo())


//method returns the system uptime in seconds

console.log((((os.uptime()/60)/60)/24).toFixed(2)+' Days') //to get the system uptime in days



//saving the curret os info

const osInfo = {
    osName : os.type(),
    osVersion : os.version(),
    osRelease : os.release(),
    systemFreeMem : os.freemem()/1024,
    systemTotalMem : os.totalmem()/1024
}

console.log(osInfo)