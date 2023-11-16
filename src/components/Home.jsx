import React from 'react'
import Products from './Products'

function Home() {
  return (
    <div>
        <div class="card text-bg-dark">
  <img src="/pics/pozadina2.jpg" class="card-img" alt="Background" height="800px" width="600px" />
  <div class="card-img-overlay d-flex flex-column justify-content-center">
<div className="container">
{/* <h5 class="card-title display-3 fw-bolder">Welcome!</h5> */}
    {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p> */}
</div>
   
  </div>
</div>
<Products/>
    </div>
  )
}

export default Home