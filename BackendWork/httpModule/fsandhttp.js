const fs = require('fs').promises;
const http = require('http');
const PORT = 2527;
const server = http.createServer(async (req, res) => {
    // try{
     // res.setHeader('Content-Type', 'text/html');
    // res.write("Welcome to http and FS module");
    // const data = await fs.readFile('student.json', {encoding:'utf-8'});
    // res.write(`<h2 style='color:cyan'>${data}</h2>`)
    // res.end("-----------------response end-----------------");
    // }
    // catch(err) {
    //     console.log("Error while reading file",+err);
    // }

    if (req.url == '/home' && req.method == "GET") {
        res.setHeader('Content-Type', 'text/html');
        const htmlTemplate = await fs.readFile('home.html');
        res.end(htmlTemplate);
    }
    else if (req.url == "/textdata" && req.method== "GET"){

    }
    else {
        res.end('error.html');
    }
})

server.listen(PORT, () => {
    console.log("Server is running on->",+ PORT );
})