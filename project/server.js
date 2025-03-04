const http=require("http");
const fs = require('fs').promises;
const PORT=2972;

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method);

    // if (req.url === '/users' && req.method == "GET"){
    //     if(req.url === '/id' && req.method == "GET"){

    //     }
    // }
    // if(req.url === '/edituser' && req.method == 'PATCH'){

    // }
    if(req.url === '/createuser' && req.method == 'POST'){
        let body="";
        let arr=[];
        req.on("data",chunk =>{
            body+=chunk;
        })
        
        
        req.on('end', async() => {
            console.log(body);
            const {id, name, email } = JSON.parse(body);
            console.log(id);
            console.log(name);
            console.log(email);

            const fdata = await fs.readFile('quiz.json', {encoding:'utf-8'});
                    arr = JSON.parse(fdata);
                    console.log(arr);
                    const result = arr.find(ele => ele.email == email);
                    if (result) {
                        res.setHeader('Content-Type', 'application/json');
                        return res.end(JSON.stringify({"message" : 'This is already registered with us, Try other one.'}))
                    }
                    else {
                        arr.push({id, name, email});

                        await fs.writeFile('quiz.json', JSON.stringify(arr, null, 2));

                        // console.log(body);

                        return res.end(JSON.stringify({"message": "/register api hit successfully!!"}));
                    }

        })
    }
    // if(req.url === '/deleteuser' && req.method == 'DELETE'){

    // }
    // res.end('Server running')
})

server.listen(PORT,() => {
    console.log(`Server running at port ${PORT}`)
})