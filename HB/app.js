const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const server = app.listen(8080, console.log('Server up'))

app.engine('handlebars', handlebars.engine())
app.set('views','./views')
app.set('view engine', 'handlebars')
app.use(express.urlencoded({extended:true}))


let products = []

app.get('/',(req,res)=>{
    res.render('products')
})


app.get('/productos', (req, res)=>{
    res.render('history', {
        products: products
    })
})

app.post('/productos', (req,res)=>{
    products.push(req.body)
    res.redirect('/')
})