import React from 'react'
import data from '../data'

const HomeScreen = () => {
  return (
    <div>
        
        <h1>feature products</h1>
        
        <div className="products">
          {data.products.map((product) => (
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