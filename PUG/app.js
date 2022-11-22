const express = require('express')
const app = express()

const server = app.listen(8080, console.log('Server up'))

app.set('views','./views')
app.set('view engine','pug')
app.use(express.json())
app.use(express.urlencoded({extended:true}))


let products = []

app.get('/', (req,res)=>{
    res.render('products')
})


app.get('/productos', (req, res)=>{
    res.render('history', {
        products
    })
})

app.post('/productos', (req,res)=>{
    console.log(req.body)
    products.push(req.body)
    res.redirect('/')
})
