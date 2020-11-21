import React from 'react'

export default function DataBinding() {
    //Binding biến , đối tượng
    const title ='Cybersoft';
    const srcImg = "https://picsum.photos/200/200";

    const SinhVien ={
        maSV: '0001',
        tenSV: 'Nguyễn Văn A',
        hinhAnh: 'https://picsum.photos/200/200',
    }
    //Binding hàm
    const renderHinhAnh = () =>{
        //Gtri phải trả về 1 chuỗi, số, jsx(1 đoạn code html đc bảo phủ bởi 1 thẻ)
        return <div>
            <h3>Hình ảnh</h3>
            <img src={SinhVien.hinhAnh} width="200" height="200"/>
        </div>
    }
    return (
        <div className="container">
           <h3>Databinding</h3>
           <p id="title" className="display-4">
              Tiêu đề: {title}
           </p>
           <img src={srcImg} width="200" height="200" alt="123.js"/>
           <input className="form-control w-25 mt-4" value={title}/> 
            <hr/>
            <h3>THÔNG TIN SINH VIÊN</h3>
           <div className="card  ">
                <img className="card-img-top" src={SinhVien.hinhAnh} style={{width:200,height:200}} />
                <div className="card-body">
                <h4 className="card-title">Mã sinh viên : {SinhVien.maSV}</h4>
                 <p className="card-text">Tên sinh viên : {SinhVien.tenSV}</p>
                </div>
            </div>
            <hr/>
            <div className="mt-4">{renderHinhAnh()}</div>
        </div>
    )
}
