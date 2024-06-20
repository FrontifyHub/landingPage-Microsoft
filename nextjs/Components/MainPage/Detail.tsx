import { Box, Text, Link } from '@chakra-ui/react';
import React from 'react';

const array = [
    {
        id: 1,
        text: "Màn hình được mô phỏng. Phạm vi cung cấp tính năng và ứng dụng có thể khác nhau tùy theo khu vực.",
    },

    {
        id: 2,
        text: "Minh họa cho một số ứng dụng sẽ có sau. Một số ứng dụng chỉ được cung cấp thông qua ứng dụng Microsoft Store trong Windows 11.",
    },

    {
        id: 3,
        text: "Gói đăng ký Microsoft 365 được bán riêng.",
    },

    {
        id: 4,
        text: (
            <>  
                Hiện đã có bản nâng cấp Windows 11 cho các PC đủ điều kiện đáp ứng
                <Link href="#" textDecoration="underline" color="#00BCF2" mr="5px" ml= "3px" as ="b"> 
                    thông số kỹ thuật tối thiểu của thiết bị.
                </Link> 
                    Thời gian nâng cấp có thể khác nhau tùy từng thiết bị. Bạn có thể mất phí dịch vụ Internet. 
                    Các tính năng và phạm vi cung cấp ứng dụng có thể khác nhau tùy theo khu vực. Một số tính năng yêu cầu phải có phần cứng cụ thể 
                <Link href="#" textDecoration="underline" color="#00BCF2" mr="5px" ml = "3px" as = "b"> 
                    xem Thông số kỹ thuật của Windows 11.
                </Link>
            </>
        ),
    },

    {
        id: 5,
        text: (
            <>
                Trải nghiệm ứng dụng Liên kết điện thoại được cài đặt sẵn trên PC chạy Windows 10 
                (tối thiểu là chạy Windows 10, Bản cập nhật tháng 5 năm 2019) hoặc Windows 11. 
                Để trải nghiệm toàn bộ chức năng, điện thoại Android phải chạy Android 7.0 trở lên. 
                Để dùng ứng dụng Liên kết điện thoại cho iOS, bạn cần có iPhone chạy iOS 14 trở lên, 
                thiết bị chạy Windows 11, kết nối Bluetooth và phiên bản mới nhất của ứng dụng Liên kết điện thoại. 
                Không khả dụng cho iPad (iPadOS) hoặc MacOS. Khả năng tương thích của thiết bị có thể khác nhau. 
                Các hạn chế theo khu vực có thể áp dụng.
            </>
        ),
    },

    {
        id: 6,
        text: (
            <> 
                Copilot trong Windows (ở dạng bản xem trước) hiện có ở một số thị trường trên toàn cầu và sẽ được triển khai 
                bắt đầu từ mùa hè năm 2024 cho các PC chạy Windows 11 ở Khu vực Kinh tế Châu Âu. Chức năng của Copilot trong 
                Windows 10 bị giới hạn và có 
                <Link href="#" textDecoration="underline" color="#00BCF2" ml= "3px" as ="b"> 
                    yêu cầu hệ thống
                </Link>
                .
                <Link href="#" textDecoration="underline" color="#00BCF2" ml= "3px" as ="b"> 
                    Tìm hiểu thêm
                </Link>
                .
            </>
        ),
    },
];

const textStyles = {
    fontSize : "11px",
    fontWeight : "450",
    mt : "8px"
}


const Detail = () => {
  return (
    <Box pt="30px" pb="30px" pl="5%" pr="5%" bg="#333" color="#fff">
        {array.map(({ id, text}) => (
            <Text key = {id} {...textStyles}> 
                <Link href = "#" textDecoration="underline" color = "#00BCF2" mr= "5px" as ="b">
                    {id}
                </Link>
                {text}
            </Text>
        ))}
    </Box>
  );
}

export default Detail;

