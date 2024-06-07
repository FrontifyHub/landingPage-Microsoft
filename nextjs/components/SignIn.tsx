import { Flex, Text,Box } from '@chakra-ui/react'
import React from 'react'
import { BsPersonCircle } from "react-icons/bs";


///////////////////////////////Work In Progress//////////////////////////
const SignIn = () => {
  return (
    <Flex marginRight = "40px"> 
        <Box  
            fontSize ="small"
            _hover ={{cursor: 'Pointer'}}
            >
                <span style ={{marginRight: '6px'}}> Đăng Nhập </span>
        </Box>

        <BsPersonCircle/>
    </Flex>
  )
}

export default SignIn