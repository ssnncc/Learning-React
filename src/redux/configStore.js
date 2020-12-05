//File quản lý tất cả các state của ứng dụng thay vì đặt tại compoment
import {combineReducers,createStore} from 'redux'
//import state giỏ hàng
import {GioHangReducer} from '../redux/GioHangReducer'

const rootReducer = combineReducers({
    //Khai báo các state
    stateGioHang:GioHangReducer
})

//Tạo ra 1 store chứa rootReducer (Xem như state tổng của ứng dụng)
export const store = createStore(rootReducer);