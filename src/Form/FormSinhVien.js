import React, { Component } from "react";

export default class FormSinhVien extends Component {
    state ={
        values :{
            maSinhVien :'',
            tenSinhVien:'',
            email:'',
            soDienThoai:''
        },
        errors :{
            maSinhVien :'',
            tenSinhVien:'',
            email:'',
            soDienThoai:''
        }
        
    }
    handleChangeInput =(event)=>{
        //event đại diện cho sự kiện xảy ra trên thẻ
        let {value,name} = event.target;//Lấy gtri value người dùng nhập vào
        let typeInput = event.target.getAttribute('typeInput')//Attribute là thuộc tính ng dùng tự hêm trên thẻ
        console.log (typeInput);

        //Xử lý cập nhật values
        const newValues = {...this.state.values};//Lưu giữ lại các giá trị trước đó vào newValues
        newValues[name] = value;  //Gán giá trị người dùng mới nhập vào newValues

        //Có thể gộp 2 dòng trên bằng : const newValues = {...this.state.values, [name]: value};

        //Xử lý errors:
        const newErrors ={...this.state.errors};
        newErrors[name]= value.trim() ===''? name + 'không được bỏ trống' : '';

        if(typeInput ==='email'){
            const regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(!regexEmail.test(value)){
                newErrors[name]= name + 'Không đúng định dạng';
            }
        }

        if(typeInput ==='phone'){
            const regexNumber = /^[0-9]+$/;
            if(!regexNumber.test(value)){
                newErrors[name]= name + 'Không đúng định dạng';
            }
        }


        //setState lại
        this.setState({
            values : newValues,
            errors : newErrors
        },()=>{
            console.log("setState", this.state)
           
        })

    }
    handleSumit =(event)=>{
        event.preventDefault()//Chặn sự kiện submit của brower khi người dùng submit bằng reactForm
        //Kiểm tra dữ liệu người dùng hợp lệ=> submit
        let valid =true;
        //Ktra tất cả các thuộc tính trong this.state.values
        for(let key in this.state.values){
            if(this.state.values[key].trim()===''){
                valid = false;
            }
        }
        //Kiểm tra tất cả các thuộc tính this.state.errors
        for(let key in this.state.errors){
            if(this.state.errors[key] !== ''){
                valid= false;
            }
        }
        if(!valid){
            alert("Dữ liệu không hợp lệ")
            return;
        }
        
    }
  render() {
    return (
      <form className="card text-center" onSubmit={this.handleSumit}>
        <div className="card-header bg-dark text-white">
          THÔNG TIN SINH VIÊN
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <h5>Mã sinh viên</h5>
                <input className="form-control" name="maSinhVien" onChange={this.handleChangeInput}  />
                <p className="text-danger">{this.state.errors.maSinhVien}</p>
              </div>
              <div className="form-group">
                <h5>Tên sinh viên</h5>
                <input className="form-control" name="tenSinhVien" onChange={this.handleChangeInput}/>
                <p className="text-danger" >{this.state.errors.tenSinhVien}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <h5>Email</h5>
                <input className="form-control" name="email" onChange={this.handleChangeInput} typeInput="email"/>
                <p className="text-danger">{this.state.errors.email}</p>
              </div>
              <div className="form-group">
                <h5>Số điện thoại</h5>
                <input className="form-control" name="soDienThoai" onChange={this.handleChangeInput} typeInput="phone" />
                <p className="text-danger">{this.state.errors.soDienThoai}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="btn btn-success" type="submit">
            Thêm sinh viên
          </button>
        </div>
      </form>
    );
  }
}
