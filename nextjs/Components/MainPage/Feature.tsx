 "use client";

import { ChevronRightIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion'
import { Grid, GridItem, Image, Text, Box, Link, Flex } from '@chakra-ui/react'
import React from 'react'

const MotionChevronRightIcon = motion(ChevronRightIcon);
const MotionLink = motion(Link);

const Feature = () => {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)" 
      gap="30px" 
      px="50px"
      my="50px" 
      width="100%"
      alignItems="center"
    >
      <GridItem colSpan={1}>
        <Image
          src="/lamQuen.png"
          alt="Lam quen voi Window"
          borderRadius="lg"
          width="100%"
          height="auto"
        /> 
        <Box mt = "20px">
            <Text as="b" fontSize="34px" letterSpacing="1px" lineHeight="40px">
            Làm quen với Windows 11
            </Text>
            <Text fontSize="md" mt = "10px">
            Tìm hiểu cách sử dụng các tính năng mới của Windows 11 và xem điều gì 
            khiến hệ điều hành này trở thành phiên bản Windows tốt nhất.
            </Text>
        </Box>

        <Flex mt="30px" alignItems="center">
          <Link
            href="#"
            display="flex"
            alignItems="center"
            color="#0067B8"
            fontSize="sm"
            fontWeight="550"
            
          >
            Xem có gì mới{' '}
            <MotionChevronRightIcon
              ml="5px" 
              whileHover={{ x: 5 }} 
            />
          </Link>
        </Flex>
      </GridItem>

      <GridItem colSpan={1}>
        <Image
          src="/nangCap.png"
          alt="Lam quen voi Window"
          borderRadius="lg"
          width="100%"
          height="auto"
        /> 
        <Box mt = "20px">
            <Text as="b" fontSize="34px" letterSpacing="1px" lineHeight="40px">
            Nâng cấp trải nghiệm của bạn
            </Text>
            <Text fontSize="md" mt = "10px">
                Tìm hiểu cách tải Windows 11 trên PC4 hiện tại của bạn hoặc mua một PC mới có thể chạy Windows 11.
            </Text>
        </Box>

        <Flex mt="30px" alignItems="center">
          <Link
            href="#"
            display="flex"
            alignItems="center"
            color="#0067B8"
            fontSize="sm"
            fontWeight="550"
          >
            Tải Windows 11{' '}
            <MotionChevronRightIcon
              ml="5px" 
              whileHover={{ x: 5 }} 
            />
          </Link>
        </Flex>
      </GridItem>

      <GridItem colSpan={1}>
        <Image
          src="/troGiup.png"
          alt="Lam quen voi Window"
          borderRadius="lg"
          width="100%"
          height="auto"
        /> 
        <Box mt = "20px">
            <Text as="b" fontSize="34px" letterSpacing="1px" lineHeight="40px">
                Nhận trợ giúp
            </Text>
            <Text fontSize="md" mt = "10px">
                Bạn cần trợ giúp chuyển tệp, đặt lại mật khẩu hoặc nâng cấp lên Windows 11? 
                Hãy khám phá trang hỗ trợ Windows để biết các bài viết hữu ích về tất cả mọi thứ liên quan đến Windows. 
                Bạn đang khắc phục sự cố cụ thể? Hãy đặt câu hỏi trong Cộng đồng Microsoft.
            </Text>
        </Box>
        <Grid 
            templateColumns="repeat(2, 1fr)" 
            gap="10px"
            >
                <GridItem colSpan ={1}>
                    <Flex mt="30px" alignItems="center">
                        <Link
                            href="#"
                            display="flex"
                            alignItems="center"
                            color="#0067B8"
                            fontSize="sm"
                            fontWeight="550"
                        >
                            Nhận hỗ trợ từ Windows{' '}
                            <MotionChevronRightIcon
                            ml="5px" 
                            whileHover={{ x: 5 }} 
                            />
                        </Link>
                    </Flex>
                </GridItem>

                <GridItem colSpan ={1}>
                    <Flex mt="30px" alignItems="center">
                        <Link
                            href="#"
                            display="flex"
                            alignItems="center"
                            color="#0067B8"
                            fontSize="sm"
                            fontWeight="550"
                        >
                            Hỏi cộng đồng{' '}
                            <MotionChevronRightIcon
                            ml="5px" 
                            whileHover={{ x: 5 }} 
                            />
                        </Link>
                    </Flex>
                </GridItem>
        </Grid>
        
      </GridItem>
    </Grid>
  )
}

export default Feature
