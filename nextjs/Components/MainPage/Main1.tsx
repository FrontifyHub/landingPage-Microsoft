
import { Box, Grid,GridItem, Text, Image } from '@chakra-ui/react';
import React from 'react';

const Main1 = () => {
  return (
    <Grid 
      templateColumns="repeat(4, 1fr)" 
      paddingLeft="20px" 
      paddingRight="48px" 
      marginLeft = "45px"
      marginTop="40px"
      gap="100px"
    >
      <GridItem colSpan={2} alignItems = "center" mt = "32px">
        <Box>
          <Box
            width="60px"
            height="4px"
            bgGradient="linear(97.21deg, #0067B8 5.82%, #50E6FF 134%)"
          />
          <Text as='b' fontSize="5xl">
            Làm cho cuộc sống hằng ngày trở nên dễ dàng hơn 
          </Text>
          <Text fontSize="xl"> 
            Cho dù bạn đang chơi game, học tập, điều hành doanh nghiệp hay chăm sóc gia đình, 
            Windows 11 sẽ giúp bạn hoàn thành công việc đó. Khám phá các tính năng mới được sắp xếp hợp lý cho mọi cách bạn làm việc, 
            học tập và giải trí.
          </Text>
        </Box>
      </GridItem>
      <GridItem colSpan={2}>
        <Image
          src="/screen.png"
          alt="Windows Screen"
          boxSize='830px'
          height ="500px"
          mt={{ base: '20px', md: '0' }}
          borderRadius="lg"
        />
      </GridItem>
    </Grid>
  );
}

export default Main1;

