import React, { Component } from "react";
import {connect} from "react-redux"

 class FormSinhVienRedux extends Component {
    
    handleChangeInput =(event)=>{
        //event đại diện cho sự kiện xảy ra trên thẻ
        let {value,name} = event.target;//Lấy gtri value người dùng nhập vào
        let typeInput = event.target.getAttribute('typeInput')//Attribute là thuộc tính ng dùng tự hêm trên thẻ
        console.log (typeInput);

        //Xử lý cập nhật values
        const newValues = {...this.props.sinhVienRedux.values};//Lưu giữ lại các giá trị trước đó vào newValues
        newValues[name] = value;  //Gán giá trị người dùng mới nhập vào newValues

        //Có thể gộp 2 dòng trên bằng : const newValues = {...this.props.sinhVienRedux.values, [name]: value};

        //Xử lý errors:
        const newErrors ={...this.props.sinhVienRedux.errors};
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
        this.props.dispatch({
            type:'SET_SINH_VIEN_REDUX',
            sinhVienRedux:{
                values: newValues,
                errors: newErrors

            }
        })

        

    }
    handleSumit =(event)=>{
        event.preventDefault()//Chặn sự kiện submit của brower khi người dùng submit bằng reactForm
        //Kiểm tra dữ liệu người dùng hợp lệ=> submit
        let valid =true;
        //Ktra tất cả các thuộc tính trong this.props.sinhVienRedux.values
        for(let key in this.props.sinhVienRedux.values){
            if(this.props.sinhVienRedux.values[key].trim()===''){
                valid = false;
            }
        }
        //Kiểm tra tất cả các thuộc tính this.props.sinhVienRedux.errors
        for(let key in this.props.sinhVienRedux.errors){
            if(this.props.sinhVienRedux.errors[key] !== ''){
                valid= false;
            }
        }
        if(!valid){
            alert("Dữ liệu không hợp lệ")
            return;
        }
        this.props.dispatch({
          type:'THEM_SINH_VIEN',
          sinhVien: this.props.sinhVienRedux.values
        })
        
    }
  render() {
    //Bóc tách phần tử
    let {maSinhVien,tenSinhVien,email,soDienThoai}=this.props.sinhVienRedux.values;
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
                <input className="form-control" name="maSinhVien" onChange={this.handleChangeInput} value={maSinhVien} />
                <p className="text-danger">{this.props.sinhVienRedux.errors.maSinhVien}</p>
              </div>
              <div className="form-group">
                <h5>Tên sinh viên</h5>
                <input className="form-control" name="tenSinhVien" onChange={this.handleChangeInput} value={tenSinhVien}/>
                <p className="text-danger" >{this.props.sinhVienRedux.errors.tenSinhVien}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <h5>Email</h5>
                <input className="form-control" name="email" onChange={this.handleChangeInput} typeInput="email" value={email}/>
                <p className="text-danger">{this.props.sinhVienRedux.errors.email}</p>
              </div>
              <div className="form-group">
                <h5>Số điện thoại</h5>
                <input className="form-control" name="soDienThoai" onChange={this.handleChangeInput} typeInput="phone" value={soDienThoai} />
                <p className="text-danger">{this.props.sinhVienRedux.errors.soDienThoai}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="btn btn-success" type="submit">
            Thêm sinh viên
          </button>
          <button className="btn btn-primary ml-3" type="button" onClick={()=>{
              this.props.dispatch({
                  type:'CAP_NHAT_SINH_VIEN',
              })

          }}>Cập nhật sinh viên</button>
        </div>
      </form>
    );
  }
}
const mapStateToProps = (state)=>{
  return{
    sinhVienRedux : state.QuanLySinhVienReducer.sinhVienRedux
  }
  }
  
export default connect(mapStateToProps)(FormSinhVienRedux)