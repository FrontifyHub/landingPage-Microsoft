import { Flex, Text, Button } from '@chakra-ui/react'
import React from 'react'

const Product = () => {
  return (
    <div>
        <Flex flexDirection="column" alignItems ="center" pt =" 48px" pb = "38px">
            <Text fontSize="6xl" as='b' textAlign="center" mt ="40px">
                Tìm sản phẩm phù hợp
            </Text>
            <Text fontSize="lg" textAlign="center" mt = "15px">
            Khám phá bộ PC chọn lọc mới hoặc nhận trợ giúp trong việc chọn máy tính tốt nhất phù hợp với nhu cầu riêng của bạn.
            </Text>
            <Button 
                colorScheme='blue' 
                mt = '15px' 
                width ="200px"
                _hover={{ textDecoration: 'underline' }}>
                    Giúp tôi chọn lựa
            </Button>
        </Flex>
    </div>
  )
}

export default Product