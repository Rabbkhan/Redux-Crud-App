import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {add} from '../store/cartSlice'
import { fetchProducts } from "../store/productSlice";
import{STATUSES} from '../store/productSlice'
const Products = () => {

  const { data: products, status } = useSelector((state) => state.product);
  const dispatch =useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());

   
  }, []);


  const handleAdd = (product) =>{
    dispatch(add(product))

  }

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
}

if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
}

  return (
    <>
      <h2 className='heading'> Welcome to the Redux toolkit store</h2>
    <div className="productsWrapper">

      {products.map((product) => (
        <div  key={product.id}  className="card">
          {product.id}
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={()=> handleAdd(product)} className="btn">Add to Cart</button>
        </div>
      ))}
    </div>
      </>
  );
};

export default Products;
