import { Box, Image } from '@chakra-ui/react';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer'





const getData = () => {
    return fetch(
      `http://localhost:3004/kids`
    )
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
  };

const Boy = () => {
    const [data,setData]=useState([])

    useEffect(()=>{
        getData()
      .then((res) => {
        setData(res)
       
      })
      .catch((err) => {
       
        console.log(err);
      });

    },[])
  return (
    <div>

<Box>
    <Navbar/>
</Box>


      <Box className='boxdata'>
        {
            data.map((e)=>(
              
                
                <Box className='boxdata1'>
                    <Image className='img123' src={e.img} />
                    <h1 className='h1g'>₹ {e.price}</h1>
                    <h1 className='h1g2'>{e.title}</h1>
                </Box>

               
            ))
        }
      </Box>

      <Box>
        <Footer/>
      </Box>
    </div>
  )
}

export default Boy
