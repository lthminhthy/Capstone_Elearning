import { ACCESS_TOKEN, USER_LOGIN } from "../../util/settings/config";
import { SET_DANG_NHAP } from "../actions/types/QuanLyNguoiDungType";


let user = {};
if(localStorage.getItem(USER_LOGIN)){
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const stateDefault = {
    userLogin: user,
   
}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch(action.type){
        case SET_DANG_NHAP: {
            const {thongTinDangNhap} = action;
            console.log("thongTinDangNhapAction: ", thongTinDangNhap);
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
            localStorage.setItem(ACCESS_TOKEN, thongTinDangNhap.accessToken)
            console.log("thongTinDangNhap: ", thongTinDangNhap);

            return {...state, userLogin: thongTinDangNhap}
        }
       
        default: return {...state}

    }
}