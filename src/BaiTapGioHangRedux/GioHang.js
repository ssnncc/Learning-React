import React, { Component } from "react";
//Import thư viện kết nối vs redux store
import {connect} from 'react-redux'
 class GioHang extends Component {

  render() {
    console.log("PropsGioHang",this.props)
    return (
      <div className="container text-center">
        <span className=" display-4">GIỎ HÀNG</span>
        <table className="table">
          <thead>
            <tr>
              <th>Mã sp</th>
              <th>Tên sp</th>
              <th>Hình ảnh</th>
              <th>Số lượng</th>
              <th>Đơn giá</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.gioHang.map((spGH,index)=>{
              return <tr key={index}>
              <td>{spGH.maSP}</td>
              <td>{spGH.tenSP}</td>
              <td><img src={spGH.hinhAnh} width="50px" height="50px"/></td>
              <td>{spGH.soLuong}</td>
              <td>{spGH.giaBan}</td>
              <td>{spGH.giaBan * spGH.soLuong}</td>
              <td><button className="btn btn-danger">Xóa</button></td>

          </tr>
            })}
              
          </tbody>
        </table>
      </div>
    );
  }
}

//Địanh nghĩa hàm lấy state từ redux về biến thành props của reactComponent
const mapStateToProps =(state)=>{
  //state sẽ đại diện cho rootReducer
  return{
    gioHang:state.stateGioHang.gioHang
  };
}
//Kết nối react component với redux store tạo ra 1 component mới export ra ngoài
export default connect(mapStateToProps)(GioHang);