import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let {sanPham}=this.props;
    return (
      <div className="card ">
        <img className="card-img-top" src={sanPham.hinhAnh}  height="300px" alt="123.png" />
        <div className="card-body">
    <h4 className="card-title">{sanPham.tenSP}</h4>
    <p className="card-text">{sanPham.giaBan.toLocaleString()}</p>
        </div>
        <div className="card-footer">
            <button className="btn btn-success">Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}
