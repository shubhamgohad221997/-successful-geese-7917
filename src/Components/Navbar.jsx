import { Box, Input } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      
  <Box className='na1'>
    <Box className='na2'>
    <Box className='na3'>
    <Box className='bo2'><h1 className='max'>ma</h1><h1 className='max1'>x</h1></Box>
<h3 className='h3'>Women</h3>
<h3 className='h3'>Men</h3>
<h3 className='h3'>Girl</h3>
<h3 className='h3'>Boys</h3>
    </Box>
    <Box className='na3'>

      <Input className='input' placeholder='What are you looking for?'/>
    </Box>
    </Box>
    <Box className='na21'>
   <h3 className='h31'>More</h3>
   <h3 className='h31'>Sign Up/ Sign In</h3>
    </Box>
  </Box>
    </div>
  )
}

export default Navbar
