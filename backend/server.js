import express from 'express'
import data from './data.js'

const App=express()


App.get('/api/products',(req,res)=>{
  res.send(data.products)
})
App.get('/api/products/slug/:slug',(req,res)=>{
 const product= data.products.find((x)=>x.slug===req.params.slug)
 if(product){
  res.send(product)
 }else{
  res.status(404).send({message:'product not found'})
 }
  
})


const port=process.env.PORT || 5500;
App.listen(port,()=>{
    console.log(`server at http://localhost:${port}`)
})