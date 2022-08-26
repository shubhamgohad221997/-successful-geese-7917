
import './App.css';
import Footer from './Components/Footer';
import {ChakraProvider} from '@chakra-ui/react'
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';


function App() {
  return (
    <div className="App">
  <ChakraProvider>
     {/* <Footer/> */}
     {/* <Navbar/> */}
     <HomePage/>
     

    </ChakraProvider> 
    </div>
  );
}

export default App;
