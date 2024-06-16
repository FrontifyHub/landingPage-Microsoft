import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Promote = () => {
  return (
    <div>
        <Flex flexDirection="column">
            <Text fontSize="6xl" as='b' textAlign="center" mt ="40px">
                Phiên bản Windows tốt nhất từ trước đến nay
            </Text>
            <Text fontSize="lg" textAlign="center" mt = "25px">
                Khi có nhiều việc phải làm, hãy để Windows 11 giúp bạn hoàn thành.
            </Text>
        </Flex>
    </div>
  )
}

export default Promote