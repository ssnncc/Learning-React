import React, { Component } from 'react'
import ProductList from './ProductList'
import Modal from './Modal'

export default class PropsWithEvent extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-right">
                    <button data-toggle="modal" data-target="#modelId">Giỏ hàng</button>
                </div>
                <h3 className="text-center my-4">DANH SÁCH SẢN PHẨM</h3>
                <ProductList/>
                
            </div>
        )
    }
}

