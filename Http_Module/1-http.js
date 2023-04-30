const http = require('http');

const server = http.createServer((request,response) => {
    console.log(request)
    if(request.url === '/home'){
        //response.write('Welcome to our Home Page')
        response.end(`
        <style>
        html{
            background-color:#000;
            color:white;
        }
        p{
            font-size:16px;
            font-weight:600;
        }
        </style>
        <p>Welcome to our Home Page</p>`)
    }
    else{
        //response.write('please go to /home page')
        response.end(`
        <style>
        html{
            background-color:#171717;
            color:#faf5ef;
        }
        </style>
        <h1 
        style="text-align:center;
        position:relative;
        top:52%;margin:0;
        height:40px;">Oops! not found</h1>`)
    }
})

server.listen(4200)


//server.listen to send the port to open pages

//request is send the navigator after url

//response to show what we sent on browser

//refer respose.write() and response.end()