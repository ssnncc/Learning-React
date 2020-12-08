import React, { Component } from "react";
import {connect} from 'react-redux'
class Xucxac extends Component {
    
    renderXucXac =()=>{
        return this.props.mangXucXac.map((xucxac,index)=>{
            return <img key={index} src={xucxac.hinhAnh}
            width="50" height="50" className="ml-2"/>
           
        })
    }
  render() {
    
    return (
      <div className="container-fluid">
        <div className="row text-center mt-5">
          <div className="col-4">
              <button className="btn btn-primary p-5 text-white"><span className="display-4">Tài</span></button>
          </div>
          <div className="col-4 ">
              {this.renderXucXac()}
              
          </div>
          <div className="col-4">
          <button className="btn btn-primary p-5 text-white"><span className="display-4">Xỉu</span></button>
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
