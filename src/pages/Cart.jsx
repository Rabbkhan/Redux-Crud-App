import React from 'react'
import {  useDispatch, useSelector } from 'react-redux/'
import {remove} from '../store/cartSlice'
const Cart = () => {
  const product = useSelector(state =>state.cart)
const dispatch = useDispatch();

const handleRemove = (productId) =>{
  dispatch(remove(productId));
}
  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>


        {
product.map((product)=>(
<div key={product.id} className='cartCard'>
<img src ={product.image} alt=''/>
<h4>{product.title}</h4>
  <h5>{product.price}</h5>
          <button onClick={()=>handleRemove(product.id)} className="btn">Remove</button>
        </div>
))
        }
      </div>

{/* <section>
  <h3>Products</h3>
  <Products/>
</section> */}


    </div>
  )
}

export default Cart