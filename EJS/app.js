const express = require('express')
const app = express()

const server = app.listen(8080, console.log('Server up'))

app.set('views','./views')
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))


const newProductValidation = (req, res, next) => {
    let product = req.body
    if (!product.name || !product.price || !product.img) res.redirect('/error')
    next()
}

let products = []

app.get('/', (req,res)=>{
    res.render('products')
})


app.get('/productos', (req, res)=>{
    res.render('history', {
        products
    })
})

app.post('/productos', newProductValidation, (req,res)=>{
    console.log(req.body)
    products.push(req.body)
    res.redirect('/')
})

app.get('/error', (req, res)=>{
    res.render('error')
})