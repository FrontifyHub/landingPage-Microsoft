"use client"

//Bugs: show messages
import { Box, Flex, Image, Link, Spacer, Text } from '@chakra-ui/react'
import { useState } from 'react';

const Microsoft = () => {
  const [toast, setToast] = useState(false);
  const [isToast, isSetToast] = useState(false);
  return (
    <Flex pt="15px" pb="15px" pl="5%" pr= "5%" > 
        <Flex alignItems="center" padding = "12px"> 
          <Text fontSize = "sm" color = "rgba(0,0,0,.6)" fontWeight = "400" letterSpacing="0.01em"> Theo dõi Microsoft Windows </Text>
          <Box position="relative"> 
            <Link>
              <Image 
              src="/faceBook.svg" 
              alt ="Facebook logo" 
              pl = "12px" 
              width = "40px" 
              height ="40px"
              onMouseEnter={() => setToast(true)}
              onMouseLeave={() => setToast(false)}/>

              {toast && (
                <Box
                  position = "absolute"
                  top = "45px"
                  transform = "translateX(-50%)"
                  border="1px solid rgba(0,0,0,.6)"
                  fontSize ="xs"
                  padding ="3px"
                  boxShadow ="2xl"
                  zIndex ="1"
                  width ="11em"
                >
                Theo dõi Windows trên Facebook
                </Box>
            )}
            </Link>
          </Box>
          <Box position="relative"> 
            <Link href = "#"> 
              <Image 
                src="/x.svg" 
                alt ="Facebook logo" 
                pl = "12px" 
                width = "38px" 
                height ="auto"
                onMouseEnter={() => isSetToast(true)}
                onMouseLeave={() => isSetToast(false)}/>

                {isToast && (
                  <Box
                    position = "absolute"
                    top = "45px"
                    transform = "translateX(-50%)"
                    border="1px solid rgba(0,0,0,.6)"
                    fontSize ="xs"
                    padding ="3px"
                    boxShadow ="2xl"
                    zIndex ="1"
                    width ="11em"
                  >
                  Theo dõi Microsoft Windows trên X (trước đây là Twitter)
                  </Box>
              )}
            </Link>
          </Box>
        </Flex>
        <Spacer/>
        <Flex alignItems="center" padding="12px"> 
          <Text fontSize = "sm" color = "rgba(0,0,0,.6)" fontWeight = "400" letterSpacing="0.01em"> Chia sẻ trang này </Text>
          <Image src="/faceBook.svg" alt ="Facebook logo" pl = "12px" width = "40px" height ="40px"/>
          <Image src = "/x.svg" alt = "X logo" pl = "12px" width = "38px" height ="auto"/>
        </Flex>
    </Flex>
  )
}

export default Microsoft