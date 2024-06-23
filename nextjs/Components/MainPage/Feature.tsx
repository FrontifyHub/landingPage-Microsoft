"use client"
import { Grid, GridItem, Image, Text, Box, Link, Flex } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import React from 'react';

const MotionChevronRightIcon = motion(ChevronRightIcon);


//Array??
//Bugs: icon should move when hover the link, not only itself
const Feature = () => {
  const iconVariants = {
    hover: { x: 5 },
    rest: { x: 0 },
  };
  return (
    <Grid
      templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
      gap={{ base: '6px', md: '6px' }}
      px={{ base: '20px', md: '50px' }}
      my="50px"
      width="100%"
      alignItems="start" 
    >
      <GridItem py="20px" px="20px">
        <Flex direction="column">
          <Image
            src="/lamQuen.png"
            alt="Làm quen với Windows"
            borderRadius="lg"
            width="500px"
            height="auto"
            mb="20px"
          />
          <Box>
            <Text as="b" fontSize="3xl" lineHeight="32px">
              Làm quen với Windows 11
            </Text>
            <Text fontSize="md" mt="10px">
              Tìm hiểu cách sử dụng các tính năng mới của Windows 11 và xem điều gì khiến hệ điều hành này trở thành phiên bản Windows tốt nhất.
            </Text>
          </Box>
          <Flex mt="20px" alignItems="center">
            <Link
              href="#"
              display="flex"
              alignItems="center"
              color="#0067B8"
              fontSize="sm"
              fontWeight="500"
            >
              Xem có gì mới{' '}
              <MotionChevronRightIcon 
                ml = "5px"
                variants={iconVariants}
                whileHover="hover"
                whileTap="rest"
              />
            </Link>
          </Flex>
        </Flex>
      </GridItem>

      <GridItem py="20px" px="20px">
        <Flex direction="column">
          <Image
            src="/nangCap.png"
            alt="Nâng cấp trải nghiệm của bạn"
            borderRadius="lg"
            width="500px"
            height="auto"
            mb="20px"
          />
          <Box>
            <Text as="b" fontSize="3xl" lineHeight="32px">
              Nâng cấp trải nghiệm của bạn
            </Text>
            <Text fontSize="md" mt="10px">
              Tìm hiểu cách tải Windows 11 lên PC hiện tại của bạn hoặc mua một PC mới có thể chạy Windows 11.
            </Text>
          </Box>
          <Flex mt="20px" alignItems="center">
            <Link
              href="#"
              display="flex"
              alignItems="center"
              color="#0067B8"
              fontSize="sm"
              fontWeight="500"
            >
              Tải Windows 11{' '}
              <MotionChevronRightIcon ml="5px" whileHover={{ x: 5 }} />
            </Link>
          </Flex>
        </Flex>
      </GridItem>

      <GridItem py="20px" px="20px">
        <Flex direction="column">
          <Image
            src="/troGiup.png"
            alt="Nhận trợ giúp từ Windows"
            borderRadius="lg"
            width="500px"
            height="auto"
            mb="20px"
          />
          <Box>
            <Text as="b" fontSize="3xl" lineHeight="32px">
              Nhận trợ giúp
            </Text>
            <Text fontSize="md" mt="10px">
              Bạn cần trợ giúp chuyển tệp, đặt lại mật khẩu hoặc nâng cấp lên Windows 11? 
              Hãy khám phá trang hỗ trợ Windows để biết các bài viết hữu ích về tất cả mọi thứ liên quan đến Windows.
            </Text>
          </Box>
          <Flex gap ="10px"> 
              <Flex mt="20px">
              <Link
                href="#"
                display="flex"
                alignItems="center"
                color="#0067B8"
                fontSize="sm"
                fontWeight="500"
              >
                Nhận hỗ trợ từ Windows{' '}
                <MotionChevronRightIcon ml="5px" whileHover={{ x: 5 }} />
              </Link>
            </Flex>
            <Flex mt="20px">
              <Link
                href="#"
                display="flex"
                alignItems="center"
                color="#0067B8"
                fontSize="sm"
                fontWeight="500"
              >
                Hỏi cộng đồng{' '}
                <MotionChevronRightIcon ml="5px" whileHover={{ x: 5 }} />
              </Link>
          </Flex>
          </Flex>
          
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Feature;
