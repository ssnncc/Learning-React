import React, { Component } from 'react'
import Ketqua from './Ketqua'
import Xucxac from './Xucxac'
import styleGame from './BaiTapGameXucXac.module.css'
import {connect} from 'react-redux'

 class BaiTapGameXucXac extends Component {
    render() {
        return (
            <div className={`${styleGame['bg-game']} text-center`}>
                <h1 className="text-center display-4 mt-5">BÀI TẬP GAME XÚC XẮC</h1>
              <Xucxac/>
              <Ketqua/>
              <button className="btn btn-success text-light" onClick={()=>{
                  this.props.dispatch({
                      type:'RANDOM_XUCXAC'
                  })
              }}>Play Game</button>
            </div>
        )
    }
}
export default connect()(BaiTapGameXucXac);