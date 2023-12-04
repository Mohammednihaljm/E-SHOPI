import axios from 'axios';
import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'


const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_Fail":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const ProductScreen = () => {
    const params=useParams();
    const {slug}=params

    const [{ loading, error, product }, dispatch] = useReducer(reducer, {
      product: [],
      loading: true,
      error: "",
    });
  
    // const [products, setProducts] = useState([])
  
    useEffect(() => {
      const fetchData = async () => {
        dispatch({ type: "FETCH_REQUEST" });
        try {
          const result = await axios.get(`/api/products/slug/${slug}`);
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        } catch (err) {
          dispatch({ type: "FETCH_Fail", payload: err.message });
        }
        // setProducts(result.data)
      };
      fetchData();
    }, [slug]);

  return (
    loading ? (<div>Loading...</div>
   ) : error ? (<div>{error}</div>
   ):(
    <div>
      {product.name}
    </div>
   )
  )
}

export default ProductScreen