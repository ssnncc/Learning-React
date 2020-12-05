import React, { Component } from 'react'
import Product from './Product'

export default class Modal extends Component {
  
    render() {
      let {deleteProductInCart, upDownAmount} = this.props;
        return (
  <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">GIỎ HÀNG</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
         <table className="table">
           <thead>
           <tr>
             <td>Mã SP</td>
             <td>Hình ảnh</td>
             <td>Tên SP</td>
             <td>Đơn giá</td>
             <td>Số lượng</td>
             <td>Thành tiền</td>
           </tr>
           </thead>
          <tbody>
          {this.props.cart.map((product,index)=>{
             return (
               <tr key={index}>
                 <td>{product.maSP}</td>
                 <td><img src={product.hinhAnh} width="50px" height="50px"/></td>
                 <td>{product.tenSP}</td>
                 <td>{product.giaBan.toLocaleString()}</td>
                 <td>
                   <button className="btn btn-primary" onClick={()=>upDownAmount(product.maSP,true)}>+</button>
                   {product.soluong}
                   <button className="btn btn-primary" onClick={()=>upDownAmount(product.maSP,false)}>-</button>
                   </td>
                 <td>{(product.soluong *product.giaBan).toLocaleString()}</td>
                 <td><button className="btn btn-danger" onClick={()=> deleteProductInCart(product.maSP)}>Xóa</button></td>
               </tr>
             )
           })}
          </tbody>
           
           <tfoot>
                    <tr>
                      <td colSpan="5">  </td>
                      <td>Tổng tiền </td>
                      <td>
                        {this.props.cart.reduce((tongTien,sp,index)=>{
                          return tongTien += sp.soluong * sp.giaBan
                        },0).toLocaleString()}
                      </td>
                    </tr>
                  </tfoot>
         </table>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
         
        </div>
      </div>
    </div>
  </div>


)
    }
}
