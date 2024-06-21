"use client"
import { Grid, GridItem, Image, Text, Box } from '@chakra-ui/react'
import React from 'react'

const Better = () => {
  return (
    <div style={{ background: "#EBF4FC", marginBottom: "0", paddingBottom: "32px"}}>
      <Grid 
        templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
        paddingLeft="20px" 
        paddingRight="20px" 
        marginLeft="45px"
        marginTop="48px"
        gap="100px"
      >
        <GridItem colSpan={2} display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start">
          <Box>
            <Box
              width="60px"
              height="4px"
              bgGradient="linear(97.21deg, #0067B8 5.82%, #50E6FF 134%)"
              mb="32px"
            />
            <Text as='b' letterSpacing="-.01em" fontSize="5xl" mt="24px">
              Better together
            </Text>
            <Text fontSize="lg"> 
              Khám phá những trải nghiệm của Windows 11 được xây dựng để đưa 
              các công cụ Microsoft yêu thích của bạn vào đời sống.
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={2} display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" mr="45px">
          <Image
            src="/betterTogether.png"
            alt="Windows Screen"
            width="648px"
            height="364px"
            borderRadius="lg"
            mt="48px"
            mb="48px"
          />
        </GridItem>
      </Grid>
    </div>
  )
}

export default Better;
