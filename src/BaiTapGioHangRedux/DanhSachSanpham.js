import React, { Component } from 'react'
import SanPham from './SanPham'
import dsSanPham from '../Props/Data/ProductList.json'
export default class DanhSachSanpham extends Component {
    renderSanPham=()=>{
        return dsSanPham.map((sp,index)=>{
            return <div className="col-4" key={index}>
                <SanPham sanPham={sp}/>
            </div>
        })
    }
    render() {
       
        return (
            <div className="container">
                <h1 className="text-center">DANH SÁCH SẢN PHẨM</h1>
                <div className="row">
                 {this.renderSanPham()}
                 
                </div>
            </div>

        )
    }
}
