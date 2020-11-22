import React, { Component } from 'react'

export default class HandleEvent extends Component {
    showMess =()=>{
        alert("HELLO");
    }
    showInfo =(info) =>{
        alert(info);
    }
    render() {
        const Title ="Cybersoft"
        return (
            <div className="container">
                <h3>Handle Event</h3>
                <button onClick={this.showMess}>Click me</button>
                <button onClick={()=>{
                     alert(`HELLO ${Title}`);
                }}> Show mess</button>
                <button onClick={()=>{
                     this.showInfo("HI");
                }}> Show Info</button>
                {/* Cách sử dụng hàm bind - ít dùng  */}
                <button onClick={this.showInfo.bind(this,"HELLO CYBER")}>SHOW</button>
            </div>
        )
    }
}
