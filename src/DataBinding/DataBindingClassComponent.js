import React, { Component } from 'react'

export default class DataBindingClassComponent extends Component {
    //Khai báo thuộc tính
    sinhVien ={
        maSV : '0001',
        tenSV:'Nguyễn Văn A',
        hinhAnh: 'https://picsum.photos/200/200'
    }
    //Phương thức
    rederPicture =()=>{
        return <img src={this.sinhVien.hinhAnh} width="300" height="300" alt="212" />
    }
    render() {
        const Title = "Frontend 54"
        const renderTitle = ()=>{
            return <p className="text-danger">
                {Title}
            </p>
        }
        return (
            <div>
                <h3>Databinding Class</h3>
                <p>Tiêu đề {Title}</p>
                {renderTitle()}
                <h4>THÔNG TIN SINH VIÊN:</h4>
                <ul>
                    <li>Mã sinh viên:{this.sinhVien.maSV}</li>
                    <li>Tên sinh viên:{this.sinhVien.tenSV}</li>
                    <li><img  src={this.sinhVien.hinhAnh} width="200" height="200" alt="123"/></li>
                    <li>{this.rederPicture()}</li>
                </ul>
            </div>
          
        )
    }
}
