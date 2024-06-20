import { Menu, MenuButton, MenuList, MenuItem, Link, Flex, Button, Text} from '@chakra-ui/react'
import { ChevronDownIcon, Search2Icon} from '@chakra-ui/icons';
import { useState } from 'react';
import SignIn from './SignIn';

const Menu2bar = () => {

const [toast, setToast] = useState(false);
  return (
    <Flex>
        <Menu>
            <MenuButton 
                borderRadius="0px"
                borderWidth="none"
                marginLeft= "5px"
                padding = "2px"
                _hover={{ textDecoration: 'underline'}}
                _active = {{background: 'gray.100', border: 'dashed 1px'}}
                fontSize = "small">
                    Tất cả Microsoft
                    <ChevronDownIcon />
            </MenuButton>

            <MenuList bg ="gray.100" borderBottom ="black solid 3px" width = "168px" height = "100%">
                <MenuItem  bg="gray.100"
                            _hover={{ bg: "gray.300"}}
                            _active={{ bg: "gray.400" }}
                            > 
                            <Link href ="/" fontSize ="sm">
                                Work In Progress 
                            </Link>
                </MenuItem>
            </MenuList>
        </Menu>
        
        <div style={{ display: 'inline-block', position: 'relative' }}> 
            <Button 
                bg ="none"
                fontSize = "small"
                fontWeight="normal"
                _hover={{ textDecoration: 'underline'}}
                _active = {{background: 'gray.100', border: 'dashed 1px'}}
                onMouseEnter={() => setToast(true)}
                onMouseLeave={() => setToast(false)}
                > 
                    <span style={{ marginRight: '4px' }}>Tìm kiếm</span>
                    <Search2Icon/>
            </Button>

            {toast && (
                <div
                style={{
                    position: 'absolute',
                    right:'40%',
                    backgroundColor: 'none',
                    border: 'black solid 1px',
                    fontSize: '12px',
                    whiteSpace: 'nowrap'
                }}
                >
                Tìm kiếm Microsoft.com
                </div>
            )}
        </div>
    </Flex>
  )
}

export default Menu2bar