import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuButtonProps, MenuItemProps, MenuList, MenuItem, Link } from '@chakra-ui/react';
import React from 'react'

//2 parts 
// title -> inside is text with links
//title + list[]
interface list {
  text: string;
  link: string;
}

interface menuProps {
  title: string;
  items: list[];
}

//Records: 
//allows you to define an object with dynamic keys and specific value types

const insideItems: Record<string, list[]> = {
  'Giới thiệu về Windows': [
    {text: 'Làm quen với windows 11', link: '/'},
    {text: 'So sánh Windows 10 và Windowns 11', link: '/'},
    {text: 'Bảo mật của Windows 11', link: '/'},
    {text: 'Chỉnh sửa ảnh và phim', link: '/'},
    {text: 'Vẽ & sáng tạo bằng ứng dụng Vẽ', link: '/'},
    {text: 'Bút kỹ thuật số, giọng nói và cảm hứng', link: '/'},
    {text: 'Ứng dụng', link: '/'},
    {text: 'Trò chơi', link: '/'},
    {text: 'Đồng bộ điện thoại thông minh với máy tính', link: '/'},
    {text: 'Các tính năng trong Windows', link: '/'}
  ],
  'Tải Windows': [
    {text: 'Cách tải Windows 11', link: '/'},
    {text: 'Yêu cầu hệ thống và thông số kỹ thuật của Windows 11', link: '/'},
    {text: 'Windows Backup', link: '/'},
    {text: 'Câu hỏi thường gặp', link: '/'},
    {text: 'Giúp tôi chọn PC', link: '/'},
    {text: 'Mua Windows 11 Home', link: '/'},
    {text: 'Mua Windows 11 Pro', link: '/'}
  ],
  'Mua PC': [
    {text: 'Giúp tôi chọn PC', link: '/'},
    {text: 'Hướng dẫn mua máy tính xách tay', link: '/'},
    {text: 'Máy tính xách tay cho sinh viên đại học', link: '/'}
  ],
  'Nhận hỗ trợ': [
    {text: 'Trợ giúp và hỗ trợ Windows', link: '/'},
    {text: 'Mẹo và thủ thuật', link: '/'},
    {text: 'Ngừng hỗ trợ các phiên bản cũ', link: '/'}
  ]
};

//xu ly UI
const buttonStyles : MenuButtonProps = {
  borderRadius: '0px',
  borderWidth: 'none',
  marginLeft : '10px',
  padding: '2px',
  fontSize: 'sm',
  _hover: {textDecoration: 'underline'},
  _active: {background: 'gray.100', border: 'dashed 1px'},
};

const itemStyles : MenuItemProps = {
  bg : 'gray.100',
  _hover: {bg : 'gray.300'},
  _active: {bg:'gray.400'},
  fontSize: 'sm'
}

const Customize : React.FC<menuProps> = ({title, items}) => (
  <Menu>
    <MenuButton {...buttonStyles}>
      {title}
      <ChevronDownIcon/>
    </MenuButton>

    <MenuList bg ="gray.100" borderBottom ="black solid 3px" width = "168px">
      {items.map((item, index) => (
        <MenuItem key ={index} {...itemStyles}>
          <Link href = {item.text} fontSize ="sm">
              {item.text}
          </Link>
        </MenuItem>
      ))}
    </MenuList>
  </Menu>
);

const Menu1bar: React.FC = () => {
  return (
    <>
      {Object.entries(insideItems).map(([title, items], index) => (
        <Customize key ={index} title ={title} items ={items} />
      ))}
      <Link href = "#" fontSize ="sm" pl = "2px">
        Dành cho doanh nghiệp
      </Link> 
    </>
  )
}

export default Menu1bar