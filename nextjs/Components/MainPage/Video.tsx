import { Box, Grid,GridItem, Text, Image, Button, AspectRatio } from '@chakra-ui/react';
import React from 'react'

const Video = () => {
  return (
    <Grid 
        templateColumns="repeat(4, 1fr)" 
        paddingLeft="20px" 
        paddingRight="20px" 
        marginLeft = "45px"
        marginTop="40px"
        gap="100px"
    >
        <GridItem colSpan={2} display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" mr="45px">
        <Box>
          <Box
            width="60px"
            height="4px"
            marginTop = "32px"
            bgGradient="linear(97.21deg, #0067B8 5.82%, #50E6FF 134%)"
          />
          <Text as='b' fontSize="5xl">
            Đồng bộ hóa PC và điện thoại của bạn
          </Text>
          <Text fontSize="lg"> 
            Ứng dụng Liên kết điện thoại của Microsoft giúp thực hiện cuộc gọi, 
            trả lời tin nhắn văn bản và kiểm tra thông báo trên điện thoại của bạn từ PC5.
          </Text>
            <Button 
                colorScheme='blue' 
                mt = '15px' 
                width ="360px"
                _hover={{ textDecoration: 'underline' }}>
                    Khám phá ứng dụng liên kết điện thoại
            </Button>
        </Box>
      </GridItem>
        <GridItem colSpan={2}>
            <AspectRatio maxW='850px' ratio={8 / 7} mr =" 45px">
            <video
                src="/pink.mp4"
                width="100%"
                height="100%"
                controls
                style={{borderRadius: '12px'}}
            />
            </AspectRatio>
        </GridItem>
    </Grid>
  )
}

export default Video