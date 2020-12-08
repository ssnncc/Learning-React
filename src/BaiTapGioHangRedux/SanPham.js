import React, { Component } from "react";
import {connect} from "react-redux";

class SanPham extends Component {
  render() {
   // console.log("props sản phẩm",this.props);
    let {sanPham}=this.props;
    return (
      <div className="card ">
        <img className="card-img-top" src={sanPham.hinhAnh}  height="300px" alt="123.png" />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaBan.toLocaleString()}</p>
        </div>
        <div className="card-footer">
            <button className="btn btn-success" onClick={()=>this.props.themGioHang(sanPham)}>Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps=(dispatch)=>{
  //dispatch là tham số từ redux trả ra (nó là 1 hàm dùng để gửi giá trị lên store)
  return{
    themGioHang : (spClick)=>{
      // console.log('spClick',spClick);
      //Gửi dữ liệu lên redux
      // B1: Tạo action 
      const action ={
        type:'THEM_GIO_HANG',//type là thuộc tính bắt buộc
        sanPhamClick: {...spClick,soLuong:1}
      }
      //Bước 2: sỬ DỤNG phương thức dispatch để đưa action lên redux( reducer)
      dispatch(action);
     
    }
  }
}

//Kết nối component với store
//Tham số 1  của connect: là mapStateToProps (nếu không lấy dữ liệu nào từ store về thì để null)
//Tham số 2 của connectL là mapDispatchToProps hàm này sẽ tạo ra 1 props là 1 function đưa dữ liệu lên store
export default connect(null,mapDispatchToProps)(SanPham)
