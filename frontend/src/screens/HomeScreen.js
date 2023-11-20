import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import data from '../data'

const HomeScreen = () => {
   
  const [products, setProducts] = useState([])

  useEffect(()=>{

    const fetchData=async()=>{

      const result= await axios.get('/api/products')
      setProducts(result.data)

    }
    fetchData()

  },[])
    
  return (
    <div>
        
        <h1>feature products</h1>
        
        <div className="products">
          {products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
              <a href={`/product/${product.slug}`}>

              <p>{product.name}</p>
              </a>
              <p>${product.price}</p>
              <button>Add product</button>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default HomeScreen