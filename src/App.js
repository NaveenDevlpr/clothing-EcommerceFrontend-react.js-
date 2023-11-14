import {Box} from '@mui/material'
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Home from './pages/Home';

import {Routes,Route} from 'react-router-dom'
import Collections from './components/Collections/Collections';
import Brands from './components/Brands/Brands';

function App() {
  return (
   <Box  >
      <NavBar/>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/collections/"  element={<Collections/>}/>
        <Route path='/brands/'  element={<Brands/>}/>
      </Routes>
      
   </Box>
  );
}

export default App;
