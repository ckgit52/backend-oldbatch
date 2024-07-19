const express=require('express');
const mongoose=require('mongoose');
const Book=require('./book')
const app=express();
app.use(express.json());

let books=[{id:1,title:"chandan ka",author:"chandan"}];

const port=3000;

app.get('/',(req,res)=>{
    res.send("hello world i love india")
})
//add a book
app.post('/books',async(req,res)=>{
    //add logic here
    const {title,author}=req.body;
    if(!title || !body){
        return res.status(400).send('missing title or author');
    }

    const newbook={id:books.length+1,title,author};
    book=await book.save();
    // books.push(newbook);
    res.status(201).send(book);
})

//get a book
app.get('/books',async(req,res)=>{
    const books=await Book.find();
    res.json(books);
})

//get a signle book
app.get('/books/:id',async(req,res)=>{
    //logic here
    const book=await Book.findById(req.params.id);
    if(!book){
        return res.status(404).send('BOOK NOT FOUND');
    }
    res.send(book);

    res.json(book);
})


//UPDATE A BOOK
app.put('/books/:id',async (req,res)=>{
    //logic to update a book
    const book=books.find(b=>b.id===parseInt(req.params.id));
    if(!book){
        return res.status(404).send('book not found');
    }

    const {title,author}=req.body;
    book.title=title||book.title;
    book.author=author||book.author;

    res.send(book);
})

//DELETE A BOOK
app.delete('/books/:id',(req,res)=>{
    //add logic here
    const bookindex=books.findIndex(b=>b.id===parseInt(req.params.id));
    if(bookindex===-1){
        return res.status(404).send('book not found');
    }
    books.splice(bookindex,1);
    res.status(204).send();
})


app.listen(port,()=>{
    console.log(`running in india on localhost ${port}`)
})