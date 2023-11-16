import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { UseSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/action';

function Product() {
    const {id}=useParams();
    const[product,setProduct]=useState([]);
    const [loading,setLoading]=useState(false);

const dispatch=useDispatch();
const addProduct=(product)=>{
  dispatch(addToCart(product));
}

    useEffect(() => {
        const fetchProductDetails = async () => {
          try {
            const response = await axios.get('https://30hills.com/api/products.json');
            const productItem = response.data.products.data.items.find(item => item.id === id);
            console.log(response.data);
            if (productItem) {
                setProduct(productItem);
              } else {
                console.error(`Product with ID ${id} not found`);
              }
          } catch (error) {
            console.error('Error fetching product details:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchProductDetails();
      }, [id]);

      const ShowProduct=()=>{
        return(
            <>
            <div className='col-md-6'>
                <img  height="400px" width="400px" src={product.images && product.images[0]} alt={product.name}/>

            </div>
            <div className='col-md-6'>
               <h4 className='text-uppercase'>{product.category}</h4>
               <h1 className='display-5'>{product.name}</h1>
               <p className='lead '>{product.description}</p>
           <h3 className='display-6 fw-bold my-4'>   ${product.price}</h3>
           <button className='btn btn-outline-dark' onClick={()=>{addProduct(product)}}>Add to cart</button>
           <NavLink to="/cart" className='btn btn-outline-dark'>Go to cart</NavLink>
            </div>
            </>
        )
      }

  return (
    <div className='container'>
        <div className='row'>
            {<ShowProduct />}
        </div>

    </div>
  )
}

export default Product