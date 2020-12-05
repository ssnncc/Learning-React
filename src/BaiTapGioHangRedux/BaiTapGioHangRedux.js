import React, { Component } from 'react'
import DanhSachSanpham from './DanhSachSanpham'
import GioHang from './GioHang'

export default class BaiTapGioHangRedux extends Component {
    render() {
        return (
            <div >
                <GioHang/>
                <DanhSachSanpham/>
            </div>
        )
    }
}
