//Đặt tên chữ đầu viết hoa.
//Gõ rfc để tự tạo ra cấu trúc của React function compoment (Thẻ <DemoFunctionComponent></DemoFunctionComponent> )
import React from 'react'

export default function DemoFunctionComponent() {
    return (//Nội dung thẻ chứa trong lệnh return và được bao bọc bởi 1 thẻ
        <div className="container bg-dark text-white">
            <div className="display-4 p-5">
            Component
            </div>
            <div className="p-2 pl-5">
                Nội dung
            </div>
        </div>
    )
}
