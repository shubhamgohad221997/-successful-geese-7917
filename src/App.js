
import './App.css';
import Footer from './Components/Footer';
import {ChakraProvider} from '@chakra-ui/react'
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
  <ChakraProvider>
     {/* <Footer/> */}
     <Navbar/>
    </ChakraProvider> 
    </div>
  );
}

export default App;
