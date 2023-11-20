import express from 'express'
import data from './data.js'

const App=express()


App.get('/api/products',(req,res)=>{
  res.send(data.products)
})


const port=process.env.PORT || 5500;
App.listen(port,()=>{
    console.log(`server at http://localhost:${port}`)
})