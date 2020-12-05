import React, { Component } from 'react'

import productList from "../Data/ProductList.json";
import Product from './Product';
import Modal from './Modal'
export default class ProductList extends Component {

    renderProductListHandler =()=>{
       return productList.map((product,index)=>{
            return <Product key={index} 
            prod={product} 
            onViewDetail={this.viewDetailRender}
            onAddToCart ={this.addToCart}
            />
        });

    }
    state={
        productDetail:productList[0],
        cart:[
            {
                "maSP": 1,
                "tenSP": "VinSmart Live",
                "giaBan": 5700000,
                "hinhAnh": "./img/vsphone.jpg",
                "soluong":1,
              },
        ]
    };
    viewDetailRender =(product)=>{
        //  console.log(product)
        this.setState({
            productDetail:product,
        })
    }
    
     addToCart =(product)=>{
         const productUpdate ={...product,soluong:1};
         const index= this.state.cart.findIndex(product=>product.maSP===productUpdate.maSP);
         if(index !== -1){
             this.setState({
                 cart: [...this.state.cart]
             });
             (this.state.cart[index].soluong +=1);
         } else{
            this.setState({
                cart: [...this.state.cart,productUpdate]
            });
         }
     };
    //  Xóa sản phẩm trong giỏ hàng 
    deleteProductInCart =(maSP)=>{
        var productUpdate =this.state.cart.filter(sp=>sp.maSP !==maSP);
        this.setState({
            cart:productUpdate
        })
    }
    //Tăng giảm số lượng sản phẩm
    upDownAmount = (maSP,upDown) => {
        //upDown ===true: Tăng số lượng, false: giảm số lượng
        //Xử lý
        var productUpdate =[...this.state.cart];
        let index = productUpdate.findIndex(sp=>sp.maSP===maSP);
        if(upDown){
            productUpdate[index].soluong += 1;
        }else{
            if(productUpdate[index].soluong > 1){
                productUpdate[index].soluong -=1 ;
            }
            
            
        }
        //Cập nhật state và render lại giỏ hàng
        this.setState({
            cart:productUpdate
        })

    }
    render() {
        const {productDetail,cart} =this.state;
        let total= this.state.cart.reduce((Total,sp,index)=>{
            return Total+=sp.soluong;

        },0)
        return (
            <>

            {/* Gọi popup modal từ file Modal  */}
            <Modal cart={cart} deleteProductInCart ={this.deleteProductInCart} upDownAmount={this.upDownAmount}/>
            <div className="text-right">
                 <button data-toggle="modal" data-target="#modelId">Giỏ hàng({total})</button>
                </div>
             <div className="row">
                {this.renderProductListHandler() }
            </div>
            
            {/* Thông tin chi tiết  */}
            <div className="row  mt-5">
                <div className="col-6">
                    <h5 className="ml-5">{productDetail.tenSP}</h5>
                    <img src={productDetail.hinhAnh} height="300" width="350"/>
                </div>
                <div className="col-6">
                <h5 className="text-center">Thông số kỹ thuật</h5>
                    <table className="table">
                        <tr>
                            <th>Màn hình</th>
                            <td>{productDetail.manHinh}</td>
                        </tr>
                        <tr>
                            <th>Hệ điểu hành</th>
                            <td>{productDetail.heDieuHanh}</td>
                        </tr>
                        <tr>
                            <th>Camera trước</th>
                            <td>{productDetail.cameraTruoc}</td>
                        </tr>
                        <tr>
                            <th>Camera sau</th>
                            <td>{productDetail.cameraSau}</td>
                        </tr>
                        <tr>
                            <th>RAM</th>
                            <td>{productDetail.ram}</td>
                        </tr>
                        <tr>
                            <th>ROM</th>
                            <td>{productDetail.rom}</td>
                        </tr>
                    </table>
                </div>
            </div>
            </>
           
        )
    }
}
