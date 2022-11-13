import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { SET_DANG_NHAP, SET_THONGTIN_TAIKHOAN, SET_THONGTIN_TAIKHOAN_DEFAULT } from "./types/QuanLyNguoiDungType";

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
            // if(value != ''){
            //     dispatch({
            //         type: SET_THONGTIN_TAIKHOAN,
            //         thongTinTaiKhoan:result.data
            //     })
            // }

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