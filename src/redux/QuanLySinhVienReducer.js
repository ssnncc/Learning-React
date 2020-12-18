const stateDefault ={
    mangSinhVien: [
        {maSinhVien: "1",tenSinhVien: "Nguyễn Văn A", email:"nguyenvana@gmail.com", soDienThoai: '093939939393'},
        {maSinhVien: "2",tenSinhVien: "Nguyễn Văn B", email:"nguyenvanb@gmail.com", soDienThoai: '091313131313'}
    ],
    sinhVienSua:{
        maSinhVien:'',
        tenSinhVien:'',
        email:'',
        soDienThoia:''
    },
    sinhVienRedux:{
        
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
}
export const QuanLySinhVienReducer =(state = stateDefault,action)=>{
    switch(action.type){
        case 'THEM_SINH_VIEN':{
            //Cách 1:
            //const mangSinhVienCapNhat = [...state.mangSinhVien,action.sinhVien]
            //return {...state,mangSinhVien: mangSinhVienCapNhat}
            //Cách 2:

            const mangSinhVienUpdate =[...state.mangSinhVien,state.sinhVienRedux.values]
            return {...state,mangSinhVien: mangSinhVienUpdate}
            
        }
        case 'XOA_SINH_VIEN':{
      
            let mangSinhVienCapNhat =[...state.mangSinhVien];
            mangSinhVienCapNhat=mangSinhVienCapNhat.filter(sv=>sv.maSinhVien !== action.maSinhVien);
           state.mangSinhVien = mangSinhVienCapNhat;
            return {...state};
        }
        case 'SUA_SINH_VIEN':{
            //Cập nhật lại state
            state.sinhVienSua ={...action.sinhVienSua};
          
            //Cập nhật lại state của formredux
            let newSinhVienRedux ={...state.sinhVienRedux}
            newSinhVienRedux.values ={...action.sinhVienSua}
            return {...state,sinhVienRedux: newSinhVienRedux};
        }
        case 'SET_SINH_VIEN_REDUX':{
            state.sinhVienRedux= action.sinhVienRedux;
            return{...state};
        }
        case 'CAP_NHAT_SINH_VIEN':{
            const mangSinhVienUpdate =[...state.mangSinhVien];
            let svUpdate = mangSinhVienUpdate.find(sv =>sv.maSinhVien=== state.sinhVienRedux.values.maSinhVien);
            if(svUpdate){
                svUpdate.tenSinhVien= state.sinhVienRedux.values.tenSinhVien;
                svUpdate.email= state.sinhVienRedux.values.email;
                svUpdate.soDienThoai= state.sinhVienRedux.values.soDienThoai;
            }
            state.mangSinhVien= mangSinhVienUpdate;
            return {...state}
        }
    }
    return {...state};
}