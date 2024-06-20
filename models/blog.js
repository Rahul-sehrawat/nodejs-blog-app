const mongoose = require('mongoose')

// a schema will define the struture of the document 
const Schema = mongoose.Schema

// this will create a new instance fo schema
// here we can add the properties 
// we can pass a 2nd args in schema() constructor 
const blogSchema = new Schema({
    title:{
        type:String,
        required: true,
     },
    snippet:{
        type: String,
        rquired: true,
    },
    body:{
        type: String,
        required: true,
    }
},
{ timestamps:true}
)

// now create a model which is based on the schema
// the mongoose.model() takes a two args
// 1st args is name 
// 2nd arg will be the schema , on which schema our model will be based on
const Blog = mongoose.model('Blog',blogSchema)


module.exports= Blog

