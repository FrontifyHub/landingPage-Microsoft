import { Box, Flex, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <Box
        as="nav"
        maxW="container.xl"
        padding="10px 0 10px 40px"
        position="relative"
        zIndex="2"
        margin ="5px"
        display="flex"
    >

        <Link href= "https://www.microsoft.com/vi-vn/windows">
            <Image src = "/microsoft.png" alt = "Microsoft logo" width = {90} height = "100%"></Image> 
        </Link>


        <div> 
            <Flex alignItems="center" height="100%"> 
                <Box
                    width="2px" 
                    height= "100%"
                    backgroundColor="black"
                    mx="4"
                />
                <Link href =" https://www.microsoft.com/vi-vn/windows">
                    <Text as="a" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
                        Windows
                    </Text>
                </Link>
            </Flex>  
        </div>
    </Box>
  )
}

export default Navbar