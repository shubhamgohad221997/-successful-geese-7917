import React from 'react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
  } from '@chakra-ui/react'


 export default function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button colorScheme='white' color="black" onClick={onOpen}>Sign Up / Sign In</Button>
     
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sign up or Sign in</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <h1>Enjoy the convenience of a single account across all participating brands</h1>
                <FormLabel>Mobile Number
</FormLabel>
                <Input ref={initialRef} placeholder='Enter your Mobile Number
' />
              </FormControl>
  
              
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
            CONTINUE
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }