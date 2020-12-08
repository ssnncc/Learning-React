import React, { Component } from "react";
//Import thư viện kết nối vs redux store
import {connect} from 'react-redux'
 class GioHang extends Component {

  render() {
    //console.log("PropsGioHang",this.props)
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
              <td>
                <button onClick={()=>{this.props.tangGiamSoLuong(spGH.maSP,1)}}>+</button>
                {spGH.soLuong}
                <button onClick={()=>{this.props.tangGiamSoLuong(spGH.maSP,-1)}}>-</button>
                </td>
              <td>{spGH.giaBan.toLocaleString()}</td>
              <td>{(spGH.giaBan * spGH.soLuong).toLocaleString()}</td>
              <td><button className="btn btn-danger" onClick={()=>{this.props.xoaGioHang(spGH.maSP)}}>Xóa</button></td>
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
//Hàm taho ra 1 props gửi lên redux store
const mapDispatchToProps=(dispatch)=>{
  return{
      xoaGioHang: (maSPClick)=>{
       // console.log(maSPClick);
      //  Đưa dữ liệu lên redux store (reducer)
       const action ={
         type: 'XOA_GIO_HANG',
         maSPXoa: maSPClick
       }
       //DÙng dispatch gửi action lên redux store (reducer)
       dispatch(action);
      },
      tangGiamSoLuong : (maSPClick,soLuong)=>{
        const acction = {
          type: 'TANG_GIAM_SO_LUONG',
          maSPClick : maSPClick,
          soLuong: soLuong
        }
        dispatch (acction);
      }
  }
}
//Kết nối react component với redux store tạo ra 1 component mới export ra ngoài
export default connect(mapStateToProps,mapDispatchToProps)(GioHang);