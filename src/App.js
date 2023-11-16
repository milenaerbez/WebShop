import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';


function App() {
  return (
   <>

   <NavBar/>
   <Routes>
<Route exact path='/' element={< Home/>} />
<Route exact path='/products' element={<Products />} />
<Route exact path='/products/:id' element={<Product />} />
<Route exact path='/cart' element={<Cart/>}/>


   </Routes>
  
   </>
    
  );
}

export default App;
