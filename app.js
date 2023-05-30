const express = require('express')
const app = express()
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




app.get('/',(req,res)=>{
    res.send('helooooooo434343oooooooooo')
})

app.get('/home',(req, res) => {
        res.render("home",{title: 'Home'})
        
    })

    app.get('/index.html',(req, res) => {
        res.redirect("home")
        
    })

    app.get('/sign-in',(req, res) => {
        res.render("sign-in",{title: 'Sign-in'})
    })

    app.get('/sign-up',(req, res) => {
        res.render("sign-up",{title: 'Sign-up'})
    })

    app.get('/products.html',(req, res) => {
        res.render("products",{title: 'Products'})
    })

    app.get('/products-details.html',(req, res) => {
        res.render("./partials/products-details",{title: 'Product'})
    })

    app.get('/cart.html',(req, res) => {
        res.render("cart",{title: 'Cart'})
    })

    app.get('/contactus.html',(req, res) => {
        res.render("contact",{title: 'contact'})
    })

    app.get('/About.html',(req, res) => {
        res.render("about",{title: 'About Us'})
    })


app.use((req,res) =>{
    res.status(404).send("Sorry can't find that!")
})

app.listen(port,()=>{
    console.log(`example app listening at http://localhost:${port}`)
})
