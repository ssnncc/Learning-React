const stateDefault={
    datCuoc: true,//True là tài, false: xỉu
    soBanThang:0,
    soBanChoi:0,
    mangXucXac :[
        {hinhAnh:'./img/imgGame/4.png',diem:4},
        {hinhAnh:'./img/imgGame/5.png',diem:5},
        {hinhAnh:'./img/imgGame/6.png',diem:6}
    ]
};
export const BaiTapGameXucXacReducer = (state= stateDefault, action)=>{

    return {...state};
}