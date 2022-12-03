import { ACCESS_TOKEN, USER_LOGIN } from "../../util/settings/config";
import { SET_DANG_NHAP, SET_MALOAI_USER, SET_NGUOIDUNG, SET_THONGTIN_TAIKHOAN, SET_THONGTIN_TAIKHOAN_DEFAULT } from "../actions/types/QuanLyNguoiDungType";


let user = {};
if(localStorage.getItem(USER_LOGIN)){
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const stateDefault = {
    userLogin: user,
    thongTinTaiKhoanDefault:{},
    danhSachNguoiDung: [],
    loaiND: []
   
}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch(action.type){
        case SET_DANG_NHAP: {
            const {thongTinDangNhap} = action;
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
            localStorage.setItem(ACCESS_TOKEN, thongTinDangNhap.accessToken)

            return {...state, userLogin: thongTinDangNhap}
        }
        
        case SET_THONGTIN_TAIKHOAN_DEFAULT:{
            state.thongTinTaiKhoanDefault = action.thongTinTaiKhoanDefault
            return {...state}
        }
        case SET_NGUOIDUNG:{
            state.danhSachNguoiDung = action.danhSachNguoiDung
            return {...state}
        }
        case SET_MALOAI_USER:{
            state.loaiND = action.loaiND
            return {...state}
        }
       
        default: return {...state}

    }
}