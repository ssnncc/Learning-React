import React, { Component } from 'react'

export default class RenderWithMap extends Component {

products =[
    {id:1,name:"iphone",price:1000},
    {id:2,name:"iphone X",price:3000},
    {id:3,name:"iphone XS",price:2000},
]
//Cách 1:
renderProduct =()=>{
    let arrayJSX =[];
    for(let index in this.products){
        let product =  this.products[index];
//tẠO ĐỐI TƯỢNG Jsx
        let jssxProduct =<div className="col-4">
         <div className="card">
        <img className="card-img-top" src="https://picsum.photos/200" alt="134" />
         <div className="card-body">
          <h4 className="card-title">{product.name}</h4>
             <p className="card-text">{product.price}</p>
         </div>
    </div>

        </div>;
        arrayJSX.push(jssxProduct);//ĐƯa phần tử jsx được từ dữ liệu sản phầm
    }
    return arrayJSX;
}
//Cách 2
 renderProductWithMap=()=>{
     const pdWithMap = this.products.map((product,index)=>{
            return <div className="col-4" key={index}>
            <div className="card">
           <img className="card-img-top" src="https://picsum.photos/200" alt="134" />
            <div className="card-body">
             <h4 className="card-title">{product.name}</h4>
                <p className="card-text">{product.price}</p>
            </div>
       </div>
   
           </div>
        })
        return pdWithMap;
 }

 renderTable =()=>{
     return this.products.map((product,index)=>{
         return <tr key={index}>
         <td>{product.id}</td>
         <td>{product.name}</td>
        <td>{product.price}</td>
         </tr>
     })
 }

    render() {
        return (
            
              <div className="container">
                    <div className="row">
                        {/* {this.renderProduct()} */}
                        {this. renderProductWithMap()}
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTable()}
                        </tbody>
                    </table>
              </div>
        )
    }
}
