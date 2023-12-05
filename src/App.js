
import './App.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './components/Home';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return (
  <>
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/Cart' element = {<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>

    </>
  );
}

export default App;
