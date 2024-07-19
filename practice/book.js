const mongoose=require('mongoose');

const bookSchema=new mongoose.Schema({
    title:String,
    author:string
});

const Book=mongoose.model('Book',bookSchema);

module.exports=Book;