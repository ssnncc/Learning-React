import React, { Component } from 'react'

export default class BaitapChonXe extends Component {
    state ={
        imgSrc :'./img/car/products/red-car.jpg'//Gtri mặc định của srare
    }

    changeColor =(newColor)=>{
        this.setState({
            imgSrc: `./img/car/products/${newColor}-car.jpg`
        })
    }
    render() {
        return (
            <div>
              <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            {/* Hình ảnh của xe */}
                            <img className="w-100" src={this.state.imgSrc}/>
                        </div>
                        <div className="col-6">
                            {/* Button chọn màu xe */}
                           <div className="card ">
                               <div className="card-header bg-dark text-white"> 
                               Exterior Color
                               </div>
                              <div className="card-body">
                                <div className ="row mt-3 border border-dark p-3">
                                    <div className="col-2">
                                    <img onClick={()=>{
                                       this.changeColor('black');
                                    }} className="w-100" src="./img/car/icons/icon-black.jpg" style={{cursor:'pointer'}}/>
                                    </div>
                                    <div className="col-10">
                                        <h3>Black Color</h3>
                                    </div>
                                </div>
                                <div className ="row mt-3 border border-dark p-3">
                                    <div className="col-2">
                                    <img style={{cursor:'pointer'}} onClick={()=>{
                                       this.changeColor('silver');
                                    }} className="w-100" src="./img/car/icons/icon-silver.jpg"/>
                                    </div>
                                    <div className="col-10">
                                        <h3>Silver Color</h3>
                                    </div>
                                </div>
                                <div className ="row mt-3 border border-dark p-3">
                                    <div className="col-2">
                                    <img style={{cursor:'pointer'}} onClick={()=>{
                                       this.changeColor('red');
                                    }} className="w-100" src="./img/car/icons/icon-red.jpg"/>
                                    </div>
                                    <div className="col-10">
                                        <h3>Red Color</h3>
                                    </div>
                                </div>
                                <div className ="row mt-3 border border-dark p-3">
                                    <div className="col-2">
                                    <img style={{cursor:'pointer'}} onClick={()=>{
                                        this.changeColor('steel');
                                    }} className="w-100" src="./img/car/icons/icon-steel.jpg"/>
                                    </div>
                                    <div className="col-10">
                                        <h3>Steel Color</h3>
                                    </div>
                                </div>
                            </div>
                            </div>

                        </div>
                    </div>
              </div>
            </div>
        )
    }
}
