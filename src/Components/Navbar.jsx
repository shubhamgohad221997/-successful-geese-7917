import { Box } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <div>
  
      <Box className='na1'>
      <div className="navbar">
  <a href="#home">Home</a>
  <a href="#news">News</a>
  <div className="dropdown">
    <button className="dropbtn">Dropdown
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
    
      <div className="row">
        <div className="column">
        <h3>Category 1</h3>
        </div>
        <div className="column">
          <h3>Category 2</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <div className="column">
          <h3>Category 3</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  </div>
</div>
      </Box>
    </div>
  )
}

export default Navbar
