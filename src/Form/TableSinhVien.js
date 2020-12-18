import React, { Component } from 'react'
import {connect} from 'react-redux'
 class TableSinhVien extends Component {
    renderSinhVien =()=>{
        return this.props.mangSinhVien.map((sv,index)=>{
            return <tr key={index}>
                <td>{sv.maSinhVien}</td>
                <td>{sv.tenSinhVien}</td>
                <td>{sv.email}</td>
                <td>{sv.soDienThoai}</td>
                <td>
                    <button className=" btn btn-danger mr-3" onClick={()=>{
                        this.props.dispatch({
                            type:'XOA_SINH_VIEN',
                            maSinhVien: sv.maSinhVien
                        })
                    }}>Xóa</button>
                    <button className="btn btn-primary" onClick={()=>{
                        
                        this.props.dispatch({
                            type: 'SUA_SINH_VIEN',
                            sinhVienSua: sv
                        })
                    }}>Sửa</button>
                </td>
                
            </tr>
        })
    }
    render() {
        return (
            <div>
                <table className="table mt-5" border="1">
                    <thead>
                        <tr className="bg-dark text-white">
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSinhVien()}
                    </tbody>
                </table>
            </div>
        )
    }
}
//()=>{return {}} sẽ giống như ()=>({})
// ví dụ: ()=>{return <div></div>} sẽ tương tự như ()=>(<div></div>)

// const mapStateToProps =(state)=>{
//     return{
//         mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien
//     }
// }
// ---------- 2 cách viết tương tự nhau ---------------
const mapStateToProps =(state)=>({
    mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien
})
export default connect (mapStateToProps)(TableSinhVien);