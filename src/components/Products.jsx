import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Products() {
    const [data,setData]=useState([]);
    const[filter, setFilter]=useState(data);
    const[loading,setLoading]=useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://30hills.com/api/products.json');
            console.log('API Response:', response.data);
    
            let updatedProducts = response.data.products.data.items;

            setData(updatedProducts);
            setFilter(updatedProducts);
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);
    
const filterProducts=(cat)=>{
const updatedProducts=data.filter((x)=>x.category===cat);
setFilter(updatedProducts);
}

const sortProducts = (order) => {
  const sortedProducts = [...data].sort((a, b) =>
    order === 'asc' ? a.price - b.price : b.price - a.price
  );
  setFilter(sortedProducts);
};

// const searchProducts = (term) => {
//   const searchedProducts = data.filter(
//     (x) => x.name.toLowerCase().includes(term.toLowerCase())
//   );
//   setFilter(searchedProducts);
// };

// const handleSearchChange = (e) => {
//   setSearchTerm(e.target.value);
// };


      const ShowProducts=()=>{
        return(
            <>
            <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                <button className='btn btn-outline-dark m2-2'>All</button>
                 <button className='btn btn-outline-dark m2-2' onClick={()=>filterProducts("accessories")}>Accessories</button>
                 <button className='btn btn-outline-dark m2-2' onClick={()=>filterProducts("apparel")}>Apparel</button>
                 <button className='btn btn-outline-dark m2-2' onClick={()=>filterProducts("bags")}>Bags</button>
                 <button className='btn btn-outline-dark m2-2' onClick={()=>filterProducts("drinkware")}>Drinkware</button>
                 <button className='btn btn-outline-dark m2-2' onClick={()=>filterProducts("office")}>Office</button>
                 <button className='btn btn-outline-dark m2-2' onClick={()=>filterProducts("shop by brand")}>Shop by Brand</button>
            </div>
            <div className="d-flex justify-content-end mb-3">
          <label className="me-2">Sort by Price:</label>
          <button className="btn btn-outline-dark mx-2" onClick={() => sortProducts('asc')}>
            Asc
          </button>
          <button className="btn btn-outline-dark mx-2" onClick={() => sortProducts('desc')}>
            Desc
          </button>
        </div>
        {/* <div className="d-flex justify-content-end mb-3">
          <label className="me-2">Search by Name:</label>
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="btn btn-outline-dark" onClick={() => searchProducts(searchTerm)}>
            Search
          </button>
        </div> */}
       
         {filter.map((product)=>{
            return(
                <>
                <div className='col-md-3'>
                <div class="card h-100 text-center "key={product.id}>
  <img src={product.images && product.images[0]} class="card-img-top" alt={product.name} />
  <div class="card-body">
    <h5 class="card-title">{product.name}</h5>
    <p class="card-text fw-bold"> ${product.price}</p>
    <NavLink to={`/products/${product.id}`} class="btn btn-outline-dark">Product details</NavLink>
  </div>
</div>
                </div>
                </>
            )
         })}
            </>
        )

        
      }
  

  return (
    <div>
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-12 mb-5'>
                   <h1 className='display-6 fw-bolder text-center'> Product list</h1>
                   <hr/>
                </div>
            </div>
            <div className='row justify-content-center'>
                {<ShowProducts />}
            </div>
        </div>

    </div>
  )
}

export default Products