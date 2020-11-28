import React, { Component } from 'react'
import ProductRFC from './ProductRFC'

export default class DemoProps extends Component {
    render() {
        return (
            <div className="container">
            <h3 className="text-center">DANH SÁCH SẢN PHẨM</h3>
            <div className="row">
                <div className="col-3">
                <ProductRFC name="iphone" price="1000$"/>
                </div>
                <div className="col-3">
                <ProductRFC name="samsung" price="700$"/>
                </div>
                <div className="col-3">
                <ProductRFC name="sony" price="500$"/>
                </div>
                <div className="col-3">
                <ProductRFC name="oppo" price="300$"/>
                </div>
               
            </div>
            </div>
        )
    }
}
