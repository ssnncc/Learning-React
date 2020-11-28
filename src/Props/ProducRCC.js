import React, { Component } from 'react'

export default class ProducRCC extends Component {
    render() {

        let {sanPham}= this.props;
    //   this.props la thuộc tính có sãn của react class component dùng để nhận gtri từ component truyền vào
    //   this.props là thuộc tính không được gán gtri mới

        return (
            <div className="card text-left">
                <img className="card-img-top" src={sanPham.hinhAnh} alt />
                <div className="card-body">
        <h4 className="card-title">{sanPham.tenSP}</h4>
        <p className="card-text">{sanPham.giaBan}</p>
                </div>
             </div> 
        )
    }
}
