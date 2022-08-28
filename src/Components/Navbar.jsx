import { Box, Button, Input } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate=useNavigate();

  function men(){
    navigate("/men")
  }

  function women(){
    navigate("/women")
  }

  function boy(){
    navigate("/boy")
  }
  return (
    <div>
      
  <Box className='na1'>
    <Box className='na2'>
    <Box className='na3'>
    <Box className='bo2'><h1 className='max'>ma</h1><h1 className='max1'>x</h1></Box>
<h3 className='h3' ><Button colorScheme='white' color="black"  className='btn1' onClick={women}>Women</Button>  </h3>
<h3 className='h3' > <Button className='btn1' colorScheme='white' color="black" onClick={men}>Men</Button> </h3>
<h3 className='h3'> <Button colorScheme='white' color="black" onClick={boy}> Girl</Button></h3>
<h3 className='h3'> <Button colorScheme='white' color="black"> Boys</Button></h3>
    </Box>
    <Box className='na3'>

      <Input className='input' width="500px" placeholder='What are you looking for?'/>
    </Box>
    </Box>
    <Box className='na21'>
   <h3 className='h31'><Button colorScheme='white' color="black"> More</Button> </h3>
   <h3 className='h31'> <Button colorScheme='white' color="black">Sign Up/ Sign In</Button> </h3>
    </Box>
  </Box>
    </div>
  )
}

export default Navbar
