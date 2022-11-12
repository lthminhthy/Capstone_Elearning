import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { SET_DANG_NHAP } from "./types/QuanLyNguoiDungType";

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