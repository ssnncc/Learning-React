import React, { Component } from 'react'
import Ketqua from './Ketqua'
import Xucxac from './Xucxac'
import styleGame from './BaiTapGameXucXac.module.css'

export default class BaiTapGameXucXac extends Component {
    render() {
        return (
            <div className={`${styleGame['bg-game']}`}>
                <h1 className="text-center display-4 mt-5">BÀI TẬP GAME XÚC XẮC</h1>
              <Xucxac/>
              <Ketqua/>
            </div>
        )
    }
}
