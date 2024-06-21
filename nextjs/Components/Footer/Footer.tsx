import { Box, Flex, Link, Text } from '@chakra-ui/react'
import { FiCheckSquare } from "react-icons/fi";
import { GiWorld } from "react-icons/gi";
import React from 'react'

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <Box px= "5%" py= "25px" bg= "#F2F2F2">
      <Flex gap = "1.5em" direction={{ base: 'column', xl: 'row' }}> 
          <Flex> 
            <Link href = "#" fontSize ="xs" color = "#616161" display="flex" > 
              <GiWorld style={{ fontSize: '1.2rem', marginRight: '5px' }}/>
              Tiếng Việt (VietNam)
            </Link>
          </Flex>

          <Flex> 
            <Link href = "#" fontSize ="xs" color = "#616161" display="flex" > 
              <FiCheckSquare style={{ fontSize: '1.2rem', marginRight: '5px', color :"#00A3C4" }}/>
              Các lựa chọn về quyền riêng tư của bạn
            </Link>
          </Flex>

          <Flex> 
            <Link href = "#" fontSize ="xs" color = "#616161" display="flex"> 
              Quyền riêng tư về sức khỏe người dùng
            </Link>
          </Flex>    
      </Flex>

      <Flex mt = "5px" justifyContent="flex-end" gap = "10px">
        <Link href = "#" fontSize ="xs" color = "#616161" display="flex" alignItems= "right"> 
            Liên hệ với Microsoft
        </Link>
        <Link href = "#" fontSize ="xs" color = "#616161" display="flex" alignItems= "right"> 
            Quyền riêng tư
        </Link>
        <Link href = "#" fontSize ="xs" color = "#616161" display="flex" alignItems= "right"> 
            Điều khoản sử dụng
        </Link>
        <Link href = "#" fontSize ="xs" color = "#616161" display="flex" alignItems= "right"> 
            Nhãn hiệu
        </Link>
        <Link href = "#" fontSize ="xs" color = "#616161" display="flex" alignItems= "right"> 
            Giới thiệu về quãng cáo chúng tôi
        </Link>
        <Text fontSize ="xs" color = "#616161">&copy; Microsoft {getYear()}</Text>
      </Flex> 
    </Box>
  )
}

export default Footer