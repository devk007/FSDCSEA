const http=require('http');

const PORT=2527;
const server=http.createServer(async (req,res)=>{
    res.setHeader('Conetnt-Type','text/html');
    const data=await fetch("https://fakestoreapi.com/products");
    const jsondata=await data.json();
    console.log(jsondata[0].category);

    const htmltemplate=`<html>
    <head><title>Online Clothes Shop</title>
    <style>
        .main{
            border: 1px solid black;
            width: fit-content;
        }
    </style>

    </head>
    <body>

    ${
        jsondata.map((product)=> {
            return (
                `<div class="main">
                    <h1>${product.id}</h1>
                    <img src=${product.image} height=200px width=200px/>
                    <h1>${product.title}</h1>
                    <p>${product.description}</p>
                    <h5>$ ${product.price}</h5>
                </div>`
            )
        })
    }

    </body>
    </html>`

res.end(htmltemplate);

})

server.listen(PORT,()=>{
    console.log("Server is running on-->"+PORT);
})