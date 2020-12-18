import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import FormSinhVienRedux from './FormSinhVienRedux'
import TableSinhVien from './TableSinhVien'

export default class BaiTapQuanLySinhVien extends Component {
    render() {
        return (
            <div className="container">
                {/* <FormSinhVien/> */}
                <FormSinhVienRedux/>
                <TableSinhVien/>
            </div>
        )
    }
}
