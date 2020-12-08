const stateGioHang ={
    gioHang:[
        // { maSP:1, tenSP:'IphoneX', hinhAnh:'./img/sp_iphoneX.png',giaBan:1000,soLuong:4}
    ]
}
export const GioHangReducer = (state= stateGioHang,action)=>{
    //console.log("action",action);
    switch(action.type){
        case 'THEM_GIO_HANG':{
            //Xử lý cập nhật state.gioHang
            let gioHangCapNhat= [...state.gioHang];
            //Tìm trong giỏ hàng có sản phẩm nào có mã giống vs sp click
            let spGioHang= gioHangCapNhat.find(sp=>sp.maSP=== action.sanPhamClick.maSP);
            if(spGioHang){
                // Tìm thấy => Tăng số lượng 
                spGioHang.soLuong +=1;
            }else{
                gioHangCapNhat.push(action.sanPhamClick);
            }
            //Cập nhật lại state
            state.gioHang=gioHangCapNhat;
           // console.log("sate mới",state);
            //immutable (tính bất biến của redux): gtri state mới trả về phải khác state cũ.
            return {...state};
        }
        case 'XOA_GIO_HANG':{
           
            //Cách 1:
                // let gioHangCapNhat =[...state.gioHang];
                // // Tìm mã sp cần xóa 
                // let index = gioHangCapNhat.findIndex(sp=>sp.maSP===action.maSPXoa);
                // if(index !== -1){
                //     gioHangCapNhat.splice(index,1);
                // }
                // state.gioHang = gioHangCapNhat;
                // return {...state};
            //Cách 2:
            let gioHangCapNhat =[...state.gioHang];
            gioHangCapNhat=gioHangCapNhat.filter(sp=>sp.maSP !== action.maSPXoa);
            //Cập nhật lại giỏ hàng
            state.gioHang = gioHangCapNhat;
            return {...state};
        }
        case 'TANG_GIAM_SO_LUONG':{
            let gioHangCapNhat =[...state.gioHang];
            //Tìm sản phẩm được click
            let spGH = gioHangCapNhat.find(sp=>sp.maSP === action.maSPClick);
             if(spGH){
                if(action.soLuong ==-1 & spGH.soLuong <=1){
                    return {...state};
                }
                spGH.soLuong += action.soLuong;
             }
                //cập nhật lại giỏ hàng
                state.gioHang = gioHangCapNhat; 
                 return {...state};
        }
    }
    return state;
}