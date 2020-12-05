import React, { Component } from 'react'
import ProductList from './ProductList'
import Modal from './Modal'

export default class PropsWithEvent extends Component {
    render() {
        return (
            <div className="container">
                
                <h3 className="text-center my-4">DANH SÁCH SẢN PHẨM</h3>
                <ProductList/>
                
            </div>
        )
    }
}

