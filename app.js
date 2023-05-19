const express = require('express')
const app = express()

const workoutRoutes= require('./routes/authRoute')
//use env file
require ('dotenv').config()
const port =6005
app.set('view engine','ejs')
app.use(express.static('public'))

//for auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});



app.listen(process.env.PORT, () => {
    console.log(' Hi',process.env.PORT)
})


//routes
app.use('/api',workoutRoutes)


app.use((req,res) =>{
    res.status(404).send("Sorry can't find that!")
})


