const express = require('express')
const mongoose = require('mongoose')
const { render } = require('ejs')
const blogRoutes = require('./routes/blogRoutes')
require('dotenv').config();


const app = express()



const dbURI = process.env.DB
console.log(dbURI)

mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
        .then((result)=>{
            console.log('connected to db')
            app.listen(3000)
        })
        .catch((err)=>{console.log(err)})


app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))

app.use(blogRoutes)

app.get('/',(req,res)=>{
   res.redirect('/blogs')
})

app.get('/about',(req,res)=>{
  res.render('aboutejs',{title:'about'})
})

// 404 page
app.use((req,res)=>{
    res.status(404).render('404ejs',{title:'404'})

})