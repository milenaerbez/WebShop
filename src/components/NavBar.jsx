import React from 'react'
import { NavLink } from 'react-router-dom'
import {  useSelector } from 'react-redux/es/hooks/useSelector'


function NavBar() {
  const state=useSelector((state)=>state.handleCart);
  return (
    <div>
<nav class="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
  <div class="container-fluid">
    <NavLink className="btn btn-outline-dark ms-2" to="/">Web shop</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink className="btn btn-outline-dark ms-2" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="btn btn-outline-dark ms-2" to="/products">Products</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="btn btn-outline-dark ms-2" to="/">About</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="btn btn-outline-dark ms-2" to="/">Contact</NavLink>
        </li>
      
      </ul>
      <div className='buttons'>
        <NavLink to="/cart" className="btn btn-outline-dark ms-2">
        <i class="fa-solid fa-cart-shopping"></i>Cart({state.length})
        </NavLink>
      </div>
     
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar