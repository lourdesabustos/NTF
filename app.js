const express = require("express");
const path = require("path");

const app = express();


const publicpath = path.resolve(__dirname, "./public");
app.use( express.static(publicpath) );

app.get("/", (req, res) => {res.sendFile(path.resolve(__dirname,"./views/registro.html"));})



app.listen(3000, () => {console.log("servidor corriendo en el puerto 3000");});


