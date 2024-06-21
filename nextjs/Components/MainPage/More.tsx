"use client"

import { ChevronRightIcon } from '@chakra-ui/icons';
import { Flex, Box, Text, Divider, Link, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

const MotionChevronRightIcon = motion(ChevronRightIcon);
const More = () => {
  return (
    <Box 
        bgGradient= "linear(180.05deg, #8DC8E8 0.04%, rgba(141, 200, 232, 0.578125) 59.8%, rgba(141, 200, 232, 0) 104.1%)"
        mt = "0px"
        pb = "72px"
    >
      <Flex 
        paddingLeft="20px" 
        paddingRight="20px" 
        marginLeft="45px"
        gap="40px"
      >
        <Box mt="70px">
          <Text as='b' fontSize='5xl'> Tìm kiếm thêm?</Text>
          <Text fontSize="lg"> 
            Nhận trợ giúp về chuyển đổi sang Windows 11 và tận dụng tối đa trải nghiệm Windows của bạn.
          </Text>
        </Box>

        <Box mt="60px" mr="48px">
          <Divider orientation="horizontal" borderColor="RGBA(0, 0, 0, 0.24)" mb='40px' />
          <Text mb="24px" as='b' fontSize='4xl' lineHeight="56px"> 
            Trở thành người dùng nội bộ
          </Text>
          <Text fontSize="lg"> 
            Đăng ký Chương trình người dùng nội bộ Windows và bắt đầu tương tác với các kỹ sư để giúp định hình tương lai của Windows.
          </Text>
          <Flex mt="30px" alignItems="center" mb="40px">
            <Link
              href="#"
              as='b'
              display="flex"
              alignItems="center"
              color="#0067B8"
              fontSize="sm"
              fontWeight="550"
            >
              Tìm hiểu thêm{' '}
              <MotionChevronRightIcon
                ml="5px" 
                whileHover={{ x: 5 }} 
              />
            </Link>
          </Flex>
          <Divider orientation="horizontal" borderColor="RGBA(0, 0, 0, 0.24)" />
        </Box>
      </Flex>
      <Image 
        src = "/double.png" 
        alt = "Search" 
        height = "385px"
        width = "auto"
        borderRadius="lg" 
        ml = "45px"
        mt = "40px"
        pl = "72px"
        />
    </Box>
  )
}

export default More;
