import React, { Component } from "react";
import {connect} from 'react-redux'
class Xucxac extends Component {
    
    renderXucXac =()=>{
        return this.props.mangXucXac.map((xucxac,index)=>{
            return <img key={index} src={xucxac.hinhAnh}
            width="50" height="50" className="ml-2"/>
           
        })
    }
    hienThiTongDiem =()=>{
      const tongDiem = this.props.mangXucXac.reduce((td,xucXac,index)=>{
        return td += xucXac.diem
    },0);
      return tongDiem >10 ? `${tongDiem}-TÀI` : `${tongDiem}-XỈU`
    }
  render() {
    
    return (
      <div className="container-fluid">
        <div className="row text-center mt-5">
          <div className="col-4">
              <button className="btn btn-primary p-5 text-white"onClick={()=>{
                // props này tự sinh ra khi ta dùng hàm connect knoi với component
                this.props.dispatch({
                  type: 'DAT_CUOC',
                  datCuoc: true
                })
              }}><span className="display-4" >Tài</span></button>
          </div>
          <div className="col-4 ">
              {this.renderXucXac()}
              <h1 className="text-danger mt-3" >{this.hienThiTongDiem()}</h1>
          </div>
          <div className="col-4">
          <button className="btn btn-primary p-5 text-white" onClick={()=>{
                // props này tự sinh ra khi ta dùng hàm connect knoi với component
                this.props.dispatch({
                  type: 'DAT_CUOC',
                  datCuoc: false
                })
              }}><span className="display-4"  >Xỉu</span></button>
          </div>
        </div>
      </div>
    );
  }
}
// Tạo hàm mapStateToProps lấy giá trị từ store về 
const mapStateToProps =(state) =>{
    return {
        mangXucXac: state.stateGameXucXac.mangXucXac
    }
};

export default connect(mapStateToProps)(Xucxac);
