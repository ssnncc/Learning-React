import React, { Component } from 'react'
import FooterCompoment from './FooterCompoment'
import Header from './Header'
import ProductListComponent from './ProductListComponent'
import SliderComponent from './SliderComponent'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <SliderComponent/>
                <ProductListComponent/>
                <FooterCompoment/>
            </div>
        )
    }
}
