import { connect } from "react-redux";

const stateDefault = {
  datCuoc: false, //True là tài, false: xỉu
  soBanThang: 0,
  soBanChoi: 0,
  mangXucXac: [
    { hinhAnh: "./img/imgGame/4.png", diem: 4 },
    { hinhAnh: "./img/imgGame/5.png", diem: 5 },
    { hinhAnh: "./img/imgGame/6.png", diem: 6 },
  ],
};
export const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.datCuoc = action.datCuoc;
      return { ...state };
    }
    case "RANDOM_XUCXAC": {
      // console.log('action', action)
      //Tạo 1 mảng xúc xắc ngẫu nhiên
      const mangXXNN = [];
      //Xly random 3 lần tạo ra 3 xúc xắc
      for (let i = 0; i < 3; i++) {
        //Tạo số ngẫu nhiên từ 1->6
        const soNN = Math.floor(Math.random() * 6) + 1;
        //Từ số ngẫu nhiên tạo ra object xúc xắc
        const xxNN = { hinhAnh: `./img/imgGame/${soNN}.png`, diem: soNN };
        //Thêm vào mảng ngẫu nhiên
        mangXXNN.push(xxNN);
      }
      //Gán lại state của mảng xúc xắc = mangXXNN
      state.mangXucXac = mangXXNN;
      //Cập nhật state.soBanThang
      const tongDiem = state.mangXucXac.reduce((td,xucXac,index)=>{
          return td += xucXac.diem
      },0);
      
      if((state.datCuoc && tongDiem >10)|| (!state.datCuoc && tongDiem <=10)){
          state.soBanThang +=1;
      }
      //Cập nhật state.soBanChoi
      state.soBanChoi +=1;
      return { ...state };
    }
  }

  return { ...state };
};
