const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('../public/js/utils/forecast')
// Declare express
const app = express()

// Define paths
const viewsPath = path.join(__dirname,"../templates/views")
const partialsPath = path.join(__dirname,"../templates/partials")
const publicPath = path.join(__dirname,"../public")

// Define handlebars engine 
app.set('view engine','hbs')

// Define views location
app.use(express.static(publicPath))
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

// elements defination
app.get('',(req, res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Aditya Mohan'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        name:'Aditya Mohan'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        name:'Aditya Mohan'
    })
})


app.get('/weather',(req, res)=>{
    if(!req.query.address){
        return res.send({
            error:'Please send address'
        })
    }
    console.log(forecast(req.query.address,(msg)=>{
        console.log(msg)
        res.send({
            msg,
            place:req.query.address
        })
    }))
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        error:"Help article not found.",
        name:'Aditya Mohan'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        error:"Page not found.",
        name:'Aditya Mohan'
    })
})

app.listen(3000,()=>{
    console.log('Server is running')
})