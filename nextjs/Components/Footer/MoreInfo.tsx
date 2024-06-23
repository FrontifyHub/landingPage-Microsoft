import { Box, Text, UnorderedList, ListItem, SimpleGrid, Link } from '@chakra-ui/react'
import React from 'react'

interface SectionProps {
    title: string;
    items: string[];
}

const MoreInfo: React.FC = () => {
    const sections: SectionProps[] = [
        {
          title: 'Nội dung mới',
          items: [
            'Microsoft Copilot',
            'Microsoft 365',
            'Microsoft 365 Family',
            'Microsoft 365 Personal',
            'Trò chơi trên PC',
            'PC Game Pass',
            'Ứng dụng cho Windows 11',
          ],  
        },
        {
            title: 'Developer & IT',
            items: [
              'Trung tâm phát triển',
              'Hướng dẫn sử dụng',
              'Microsoft Learn',
              'Cộng đồng Microsoft Tech',
              'Azure MarketPlace',
              'AppSource',
              'Microsoft Power Platform',
              'Visual Studio',
            ],
        },
        {
            title: 'Microsoft Store',
            items: [
              'Hồ sơ tài khoản',
              'Trung tâm tải xuống',
              'Trả lại',
              'Theo dõi đơn hàng',
            ],
        },
        {
            title: 'Giáo dục',
            items: [
              'Microsoft trong ngành giáo dục',
              'Thiết bị cho ngành giáo dục',
              'Microsoft Teams dành cho giáo dục',
              'Microsoft 365 Education',
              'Office trong ngành giáo dục',
              'Đào tạo và phát triển giảng viên',
              'Ưu đãi dành cho sinh viên và phụ huynh',
              'Azure dành cho sinh viên',
            ],
        },
        {
            title: 'Doanh nghiệp',
            items: [
              'Đám mây Microsoft',
              'Microsoft Security',
              'Azure',
              'Dynamics 365',
              'Microsoft 365',
              'Microsoft Advertising',
              'Copilot for Microsoft 365',
              'Microsoft Teams',
            ],
        },
        {
            title: 'Công ty',
            items: [
              'Sự nghiệp',
              'Giới thiệu về Microsoft',
              'Tin tức công ty',
              'Quyền riêng tư ở Microsoft',
              'Nhà đầu tư',
              'Tính bền vững',
            ],
        },
    ];
    return (
        <Box bg = "#F2F2F2" py = "25px" px="5%">
            <SimpleGrid minWidth = "300px" spacing = {5} columns = {{base:1, md: 3, lg: 3, xl: 6}}>
                {sections.map((section, index) => (
                    <Section key = {index} title = {section.title} items = {section.items} />
                ))}
            </SimpleGrid>
        </Box>
    );
};

const Section : React.FC<SectionProps> = ({title, items}) => (
    <Box>
        <Text as = "b" color = "#616161" fontSize ="sm" mb = {2}>{title}</Text>
        <UnorderedList fontSize = 'xs' color = "#616161" listStyleType = "none" ml ={0} pl = {0}>
            {items.map((item, index) => (
                <ListItem key = {index} py = "5px">
                    <Link href = "#" color ="#616161">{item}</Link>
                </ListItem>
            ))}
        </UnorderedList>
    </Box>
);

export default MoreInfo