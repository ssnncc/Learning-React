import React from 'react'
//React function component nhận props là tham số đầu vào của compoment
export default function ProductRFC(props) {
  
    let {name,price} = props;
    return (
        <div>
            <div className="card text-dark">
                <img className="card-img-top" src="https://picsum.photos/200/200" alt />
                <div className="card-body">
                {/* <h4 className="card-title">{props.name}</h4>
                <p className="card-text">{props.price}</p> */}
                {/* Hoặc  */}
                <h4 className="card-title">{name}</h4>
                <p className="card-text">{price}</p>
                </div>
            </div>
        </div>

    )
}
