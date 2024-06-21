
"use client";
import { Box, Flex, Image, Spacer, Text} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import Menu1bar from './Menu1bar';
import Menu2bar from './Menu2bar';
import SignIn from './SignIn';

/////BUGS : need to fix the display

const Navbar = () => {
  return (
  <Flex
      as="nav"
      w="auto"
      padding = "5px 24px"
      position="relative"
      margin="7px"
      alignItems="center"
      display={{ base: 'none', md: 'flex' }}>
        <Flex>
            <Link href="https://www.microsoft.com/vi-vn/windows">
                <Image src="/microsoft.png" alt="Microsoft logo" width={108} height={23} ml ="40px" />
            </Link>
        </Flex>

        <Flex>
            <Box
                width="2px"
                height="23px"
                backgroundColor="black"
                mx="4"
            />
            <Link href="https://www.microsoft.com/vi-vn/windows">
                <Text fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
                    Windows
                </Text>
            </Link>
        </Flex>

        <Box ml = "10px"> 
          <Menu1bar/>
        </Box>

        <Spacer/>
        <Menu2bar/>
        <SignIn/>
    </Flex>
  );
}


export default Navbar;
