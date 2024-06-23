import { Grid, GridItem, Image } from '@chakra-ui/react';
import React from 'react';

const ProductImg = () => {
  return (
    <Grid
      templateColumns="repeat(4, 1fr)" 
      templateRows="repeat(2, 1fr)"
      gap="7px" 
      px="70px"
      my="70px" 
      width="100%"
      alignItems="center"
    >
      <GridItem colSpan={2} rowSpan={2}>
        <Image 
          src="/discussion.png" 
          alt="Discussion about the products."
          borderRadius="lg"
          width="100%"
          height="auto"
        />
      </GridItem>
      <GridItem colSpan={1} rowSpan={1}>
        <Image 
          src="/loiSongMoi.png" 
          alt="Lối sống mới."
          borderRadius="lg"
          width="100%"
          height="auto"
        />
      </GridItem>
      <GridItem colSpan={1} rowSpan={1}>
        <Image 
          src="/mayTinh.png" 
          alt="Windows 11 screen"
          borderRadius="lg"
          width="100%"
          height="auto"
        />
      </GridItem>
      <GridItem colSpan={2} rowSpan={1}>
        <Image 
          src="/airplane.png" 
          alt="Windows 11 screen"
          borderRadius="lg"
          width="100%"
          height="auto"
        />
      </GridItem>
    </Grid>
  );
}

export default ProductImg;
