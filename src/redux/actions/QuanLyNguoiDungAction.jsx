import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { SET_DANG_NHAP, SET_MALOAI_USER, SET_NGUOIDUNG, SET_THONGTIN_TAIKHOAN, SET_THONGTIN_TAIKHOAN_DEFAULT } from "./types/QuanLyNguoiDungType";

export const dangNhapAction = (thongTinDangNhap, navigate) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
            console.log("resultDangNhap: ", result);

            if (result.status === 200) {
                console.log('ok');
                dispatch({
                    type: SET_DANG_NHAP,
                    thongTinDangNhap: result.data
                    
                })
                alert('Đăng nhập thành công!')
                navigate('/')
            }
            
            

        } catch (error) {
            console.log("error: ", error.response?.data);
            alert(`${error.response?.data}!`)

        }
    }
}
export const thongTinTaiKhoanAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.thongTinTaiKhoan();
            console.log("resultTTTaiKhoan: ", result);
            console.log("resultTTTaiKhoanData: ", result.data);
          

                dispatch({
                    type: SET_THONGTIN_TAIKHOAN_DEFAULT,
                    thongTinTaiKhoanDefault: result.data
                    
                })
               
            }catch (error) {
            console.log("error: ", error.response?.data);
            alert(`${error.response?.data}!`)

        }
    }
}
export const timKiemNguoiDungTheoTenAction = (thongTin='') => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.timKiemNguoiDungTheoTen(thongTin);
            console.log("result: ", result);
          

                dispatch({
                    type: SET_NGUOIDUNG,
                    danhSachNguoiDung: result.data
                    
                })
               
            }catch (error) {
            console.log("error: ", error.response?.data);
            alert(`${error.response?.data}!`)

        }
    }
}
export const layDanhSachLoaiNguoiDungAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.layDanhSachLoaiNguoiDung();
            console.log("result: ", result);
                dispatch({
                    type: SET_MALOAI_USER,
                    loaiND: result.data
                    
                })
               
            }catch (error) {
            console.log("error: ", error.response?.data);
            alert(`${error.response?.data}!`)

        }
    }
}