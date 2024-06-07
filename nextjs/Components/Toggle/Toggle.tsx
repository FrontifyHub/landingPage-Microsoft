import { Box, Flex, Text } from '@chakra-ui/react'
import "./styles.css"

const Toggle = () => {
  return (
    <Flex 
      width = "auto"
      padding = "6px 72px" 
      background = "rgba(0, 0, 0, 0.08)"
      height = "35px"
      align-items = "right"
      justifyContent="flex-end"
      alignItems="center"
      >
        <Text fontSize= "sm" fontWeight = "bold">Hoạt hình </Text>
        <Box
          width="2px"
          height="16px"
          backgroundColor="black"
          mx="4"
        />

        <label className ="toggleBtn">
          <input type = "checkBox"/>
          <span className = "slider rounded"/>
        </label>  

        <Text fontSize= "sm" fontWeight = "bold" ml = "5px"> Bật </Text>
    </Flex>
  )
}

export default Toggle