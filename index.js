/*const http = require("http");

const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader("Content-Type","text/plain");
    res.end("Hello World");
});

server.listen(3000, () => {
    console.log("serve on port 3000");
}) ; */

const express = require ("express");
const app = express ();

function logger (req,res, next) {
    console.log (`Route Received: ${req.protocol}://${req.get("host")}${req.originalUrl}`);
    next();
}

app.use(express.json())
app.use(logger);

app.all("/user", (req, res,next) => {
    console.log("pasó por user");
    //res.send("finish");
    next();
})

app.get("/user", (req, res) => {
    res.json({
        username: "Jorge",
        password: 1234
    });
});

app.get("/", (req, res) => {
    res.send("hello world");
});



/*app.get("/user/:id", (req, res) => {
    res.send("POST REQUEST RECEIVED");
    console.log(req.params);
    console.log(req.body);
});*/


app.get("/test", (req, res) => {
    res.send("<h1>hello world</h1>");
});

app.get("/contact", (req, res) => {
    res.send("Formulario de Contacto");
});

app.listen (5000, () => {
    console.log("Servidor ejecutando puerto 5000");
});


