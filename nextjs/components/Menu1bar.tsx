import { Menu, MenuButton, MenuList, MenuItem, Link } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import React from 'react'

const Menu1bar = () => {
  return (
    <>
        <Menu>
            <MenuButton 
                borderRadius="0px"
                borderWidth="none"
                marginLeft= "10px"
                padding = "2px"
                _hover={{ textDecoration: 'underline'}}
                _active = {{background: 'gray.100', border: 'dashed 1px'}}
                fontSize = "small">
                    Giới thiệu về Windows
                    <ChevronDownIcon />
            </MenuButton>

            <MenuList bg ="gray.100" borderBottom ="black solid 3px" width = "168px" height = "100%">
                <MenuItem  bg="gray.100"
                            _hover={{ bg: "gray.300"}}
                            _active={{ bg: "gray.400" }}
                            > 
                            <Link href ="/" fontSize ="sm">
                                    Làm quen với windows 11
                            </Link>
                </MenuItem>
                <MenuItem  bg="gray.100"
                            _hover={{ bg: "gray.300"}}
                            _active={{ bg: "gray.400" }}> 
                            <Link href ="/" fontSize ="sm">
                                So sánh Windows 10 and Windows 11
                            </Link>
                </MenuItem>
                <MenuItem  bg="gray.100"
                            _hover={{ bg: "gray.300"}}
                            _active={{ bg: "gray.400" }}> 
                            <Link href ="/" fontSize ="sm">
                                Bảo mật của Window11
                            </Link>
                </MenuItem>
                <MenuItem  bg="gray.100"
                            _hover={{ bg: "gray.300"}}
                            _active={{ bg: "gray.400" }}> 
                            <Link href ="/" fontSize ="sm">
                                Chỉnh sửa ảnh và phim
                            </Link>
                </MenuItem>
                <MenuItem  bg="gray.100"
                            _hover={{ bg: "gray.300"}}
                            _active={{ bg: "gray.400" }}> 
                            <Link href ="/" fontSize ="sm">
                                Vẽ & sáng tạo bằng ứng dụng Vẽ
                            </Link>
                </MenuItem>
                <MenuItem  bg="gray.100"
                            _hover={{ bg: "gray.300"}}
                            _active={{ bg: "gray.400" }}> 
                            <Link href ="/" fontSize ="sm">
                                Bút kỹ thuật số, giọng nói và cảm hứng
                            </Link>
                </MenuItem>
                <MenuItem  bg="gray.100"
                            _hover={{ bg: "gray.300"}}
                            _active={{ bg: "gray.400" }}> 
                            <Link href ="/" fontSize ="sm">
                                Ứng dụng
                            </Link>
                </MenuItem>
                <MenuItem  bg="gray.100"
                            _hover={{ bg: "gray.300"}}
                            _active={{ bg: "gray.400" }}> 
                            <Link href ="/" fontSize ="sm">
                                Trò chơi
                            </Link>
                </MenuItem>
                <MenuItem  bg="gray.100"
                            _hover={{ bg: "gray.300"}}
                            _active={{ bg: "gray.400" }}> 
                            <Link href ="/" fontSize ="sm">
                                Đồng bộ điện thoại thông minh với máy tính
                            </Link>
                </MenuItem>
                <MenuItem  bg="gray.100"
                            _hover={{ bg: "gray.300"}}
                            _active={{ bg: "gray.400" }}> 
                            <Link href ="/" fontSize ="sm">
                                Các tính năng trong Windows
                            </Link>
                </MenuItem>
            </MenuList>
        </Menu>

        <Menu>
            <MenuButton 
                borderRadius="0px"
                borderWidth="none"
                marginLeft= "10px"
                padding = "2px"
                _hover={{ textDecoration: 'underline'}}
                _active = {{background: 'gray.100', border: 'dashed 1px'}}
                fontSize = "small">
                    Tải Windows
                    <ChevronDownIcon />
            </MenuButton>

            <MenuList bg ="gray.100" borderBottom ="black solid 3px" width = "168px" height = "100%">
                <MenuItem  bg="gray.100"
                            _hover={{ bg: "gray.300"}}
                            _active={{ bg: "gray.400" }}
                            > 
                            <Link href ="/" fontSize ="sm">
                                Cách tải Windows 11
                            </Link>
                </MenuItem>
                <MenuItem  bg="gray.100"
                            _hover={{ bg: "gray.300"}}
                            _active={{ bg: "gray.400" }}> 
                            <Link href ="/" fontSize ="sm">
                                Yêu cầu hệ thống và thông số kỹ thuật của Window 11
                            </Link>
                </MenuItem>
                <MenuItem  bg="gray.100"
                            _hover={{ bg: "gray.300"}}
                            _active={{ bg: "gray.400" }}> 
                            <Link href ="/" fontSize ="sm">
                                Windows Backup
                            </Link>
                </MenuItem>
                <MenuItem  bg="gray.100"
                            _hover={{ bg: "gray.300"}}
                            _active={{ bg: "gray.400" }}> 
                            <Link href ="/" fontSize ="sm">
                                Câu hỏi thường gặp
                            </Link>
                </MenuItem>
                <MenuItem  bg="gray.100"
                            _hover={{ bg: "gray.300"}}
                            _active={{ bg: "gray.400" }}> 
                            <Link href ="/" fontSize ="sm">
                                Giúp tôi chọn PC
                            </Link>
                </MenuItem>
                <MenuItem  bg="gray.100"
                            _hover={{ bg: "gray.300"}}
                            _active={{ bg: "gray.400" }}> 
                            <Link href ="/" fontSize ="sm">
                                Mua Windows 11 Home
                            </Link>
                </MenuItem>
                <MenuItem  bg="gray.100"
                            _hover={{ bg: "gray.300"}}
                            _active={{ bg: "gray.400" }}> 
                            <Link href ="/" fontSize ="sm">
                                Mua Windows 11 Pro
                            </Link>
                </MenuItem>
            </MenuList>
        </Menu>

        <Menu>
            <MenuButton 
                borderRadius="0px"
                borderWidth="none"
                marginLeft= "10px"
                padding = "2px"
                _hover={{ textDecoration: 'underline'}}
                _active = {{background: 'gray.100', border: 'dashed 1px'}}
                fontSize = "small">
                    Mua PC
                    <ChevronDownIcon />
            </MenuButton>

            <MenuList bg ="gray.100" borderBottom ="black solid 3px" width = "168px" height = "100%">
                <MenuItem  bg="gray.100"
                            _hover={{ bg: "gray.300"}}
                            _active={{ bg: "gray.400" }}
                            > 
                            <Link href ="/" fontSize ="sm">
                                Giúp tôi chọn PC
                            </Link>
                </MenuItem>
                <MenuItem  bg="gray.100"
                            _hover={{ bg: "gray.300"}}
                            _active={{ bg: "gray.400" }}> 
                            <Link href ="/" fontSize ="sm">
                                Hướng dẫn mua máy tính xách tay
                            </Link>
                </MenuItem>
                <MenuItem  bg="gray.100"
                            _hover={{ bg: "gray.300"}}
                            _active={{ bg: "gray.400" }}> 
                            <Link href ="/" fontSize ="sm">
                                Máy tính xách tay cho sinh viên đại học
                            </Link>
                </MenuItem>
            </MenuList>
        </Menu>

        <Menu>
            <MenuButton 
                borderRadius="0px"
                borderWidth="none"
                marginLeft= "10px"
                padding = "2px"
                _hover={{ textDecoration: 'underline'}}
                _active = {{background: 'gray.100', border: 'dashed 1px'}}
                fontSize = "small">
                    Nhận hỗ trợ
                    <ChevronDownIcon />
            </MenuButton>

            <MenuList bg ="gray.100" borderBottom ="black solid 3px" width = "168px" height = "100%">
                <MenuItem  bg="gray.100"
                            _hover={{ bg: "gray.300"}}
                            _active={{ bg: "gray.400" }}
                            fontSize ="sm"
                            > 
                            <Link href ="/" fontSize ="sm">
                                Trợ giúp và hỗ trợ Windows
                            </Link>
                </MenuItem>
                <MenuItem  bg="gray.100"
                            _hover={{ bg: "gray.300"}}
                            _active={{ bg: "gray.400" }}> 
                            <Link href ="/" fontSize ="sm">
                                Mẹo và thủ thuật
                            </Link>
                </MenuItem>
                <MenuItem  bg="gray.100"
                            _hover={{ bg: "gray.300"}}
                            _active={{ bg: "gray.400" }}> 
                            <Link href ="/" fontSize ="sm">
                                Ngừng hỗ trợ các phiên bản cũ
                            </Link>
                </MenuItem>
            </MenuList>
        </Menu>

        <Link href ="/" fontSize = "sm"> Dành cho doanh nghiệp </Link>
    </>    
  )
}

export default Menu1bar