const express=require('express')
const app=express.Router()


app.get('/',(req,res)=>{
    res.send('helooooooo434343oooooooooo')
})

app.get('/home',(req, res) => {
        res.render("./pages/home")
    })

    app.get('/sign-in',(req, res) => {
        res.render("./pages/sign-in")
    })

    app.get('/sign-up',(req, res) => {
        res.render("./pages/sign-up")
    })

    app.get('/products.html',(req, res) => {
        res.render("./pages/products")
    })

    app.get('/products-details.html',(req, res) => {
        res.render("./partials/products-details")
    })

    app.get('/cart.html',(req, res) => {
        res.render("./pages/cart")
    })

    app.get('/contactus.html',(req, res) => {
        res.render("./pages/contact")
    })

    app.get('/About.html',(req, res) => {
        res.render("./pages/about")
    })

    //to include the routes in the server 'app.js'
module.exports = app