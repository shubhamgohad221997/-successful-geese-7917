
import './App.css';

import {ChakraProvider} from '@chakra-ui/react'

import HomePage from './Components/HomePage';
import Mendata from './Components/Mendata';
import Womendata from './Components/Womendata';
import {Route, Routes} from 'react-router-dom'
import Boy from './Components/Boy';


function App() {
  return (
    <div className="App">
  <ChakraProvider>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/men' element={<Mendata/>}/>
      <Route path='/women' element={<Womendata/>}/>
      {/* <Route path='/boy' element={<Boy/>}/> */}
      <Route path='/boy' element={<Boy/>}/>

    </Routes>
     {/* <Footer/> */}
     {/* <Navbar/> */}
     {/* <HomePage/> */}
     {/* <Mendata/> */}
     {/* <Womendata/> */}
     

    </ChakraProvider> 
    </div>
  );
}

export default App;
