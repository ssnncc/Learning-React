import React, { Component } from 'react'

export default class DemoState extends Component {
    //State : Là thuốc tính có sẵn của component => Dùng để quản lý nguồn dữ liệu thay đổi trên giao diện khi ngường dùng tương tác ( click, change, blur...)
    state ={
        isLogin : false
    }
    // isLogin = false;
    userName = "Vũ Vũ";


    rederContent =()=>{
        if(this.state.isLogin){
            return <p>
                Hello {this.userName}!
            </p>
        }
            return <button onClick={()=>{
                this.handleLogin();
            }}>Đăng nhập</button>
        
    }
    handleLogin =()=>{
        //Không được thay đổi state trực tiếp mà phải thông qua phương thức setState 
        //setState(): Là phương thức có sãn của lớp đối tượng Compomnet => Dùng để thay đổi gtri trong this.state đồng thời gọi hàm render
        this.setState ({
            isLogin: true
        })
           
        
    


    }
    render() {
        return (
            <div>
                <h3>If else react</h3>
                {/* Cách 1 */}
               {/* {this.isLogin ? <p>Hello {this.userName}</p> : <button>ĐĂNG NHẬP</button>} */}
               {/* Cách 2: */}
               {this.rederContent()}
            </div>
        )
    }
}
