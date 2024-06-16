import { Box, Grid,GridItem, Text, Image, Button } from '@chakra-ui/react';
import React from 'react'

const Copilot = () => {
  return (
    <Grid 
        templateColumns="repeat(4, 1fr)" 
        paddingLeft="20px" 
        paddingRight="20px" 
        marginLeft = "45px"
        marginTop="40px"
        gap="100px"
    >
    <GridItem colSpan={2}>
        <Image
          src="/copilot.png"
          alt="Windows Screen"
          width = "650px"
          height ="650px"
          borderRadius="lg"
        />
      </GridItem>
      <GridItem colSpan={2} display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" mr="45px">
        <Box>
          <Box
            width="60px"
            height="4px"
            marginTop = "32px"
            bgGradient="linear(97.21deg, #0067B8 5.82%, #50E6FF 134%)"
          />
          <Text as='b' fontSize="5xl">
            Làm quen với Copilot trong Windows
          </Text>
          <Text fontSize="lg"> 
            Tìm những thông tin và ý tưởng bạn cần để nâng cao năng lực của mình. 
            Copilot trong Windows6 là một tính năng sử dụng AI cho phép bạn nhận được câu trả lời nhanh chóng 
            và đặt các câu hỏi tiếp theo, nhận các bản đồ họa do AI tạo ra dựa trên ý tưởng, đồng thời khơi 
            dậy khả năng sáng tạo trong khi làm việc. Tìm hiểu Copilot trong Windows, trợ lý thông minh mới của bạn.
          </Text>
            <Button 
                colorScheme='blue' 
                mt = '15px' 
                width ="180px"
                _hover={{ textDecoration: 'underline' }}>
                Tìm hiểu thêm 
            </Button>
        </Box>
      </GridItem>
    </Grid>
  )
}

export default Copilot