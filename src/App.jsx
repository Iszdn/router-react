import './App.css';
import { Route, Router, Routes, useParams } from 'react-router-dom';
import Navbar from './Components/Pages/Navbar/Navbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Layout from './Components/Pages/Layout';
import Login from './Components/Pages/Login';
import Details from './Components/Pages/Details';

function App() {
    
  return (
    <>

      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        
          <Route path='details/:id' element={<Details/>} />
          
        </Route>
  <Route path='/login' element={<Login/>} />
      </Routes>

    </>
  );
}

export default App;
