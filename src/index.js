const express=require("express");

const router=require("express").Router

const http=require("http");

const reload = require("reload");

const app=express();

const {log:l}=console;


const port=+process.env.PORT;

app.use(express.static("public"))
app.use("/static",express.static("public"))


console.log("Hola!!!");

/* app.listen(port,()=>{
    l(`Server working and listening on port ${port} ........`)
}) */


var server = http.createServer(app);

// Reload code here
reload(app)
  .then(function (reloadReturned) {
    // reloadReturned is documented in the returns API in the README

    // Reload started, start web server
    server.listen(port, function () {
      console.log("Web server listening on ports " + port);
    });
  })
  .catch(function (err) {
    console.error(
      "Reload could not start, could not start server/samples ",
      err
    );
  });