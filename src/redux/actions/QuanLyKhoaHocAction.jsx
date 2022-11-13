import { quanLyKhoaHocSerVice } from "../../services/QuanLyKhoaHocService";
import { SET_DANGKY_KHOAHOC, SET_DANH_MUC_KHOA_HOC, SET_DANH_SACH_KHOA_HOC, SET_KHOAHOC_DANHMUC, SET_THONGTIN_KHOAHOC } from "./types/QuanLyKhoaHocType";

export const layDanhSachKhoaHocAction = (tenKhoaHoc = '', navigate) => {
    if(tenKhoaHoc !== ''){
        return async (dispatch) => {
            try {
                const result = await quanLyKhoaHocSerVice.layDanhSachKhoaHoc(tenKhoaHoc);
                console.log("resultAction: ", result);

                if(result.status === 200){
                    
                    dispatch({
                        type: SET_DANH_SACH_KHOA_HOC,
                        danhSachKhoaHoc: result.data
                    })
                    navigate('/ketquatimkiem')
                }
                   
    
            } catch (error) {
                console.log("error: ", error.response?.data);
                navigate('/notfind')
    
            }
        }
    }else{
        return async (dispatch) => {
        try {
            const result = await quanLyKhoaHocSerVice.layDanhSachKhoaHoc(tenKhoaHoc);
            console.log("result: ", result.data);
            
                dispatch({
                    type: SET_DANH_SACH_KHOA_HOC,
                    danhSachKhoaHoc: result.data
                })

        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }
    }
    
}
export const layDanhMucKhoaHocAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyKhoaHocSerVice.layDanhMucKhoaHoc();
            console.log("result: ", result.data);
            
                dispatch({
                    type: SET_DANH_MUC_KHOA_HOC,
                    danhMucKhoaHoc: result.data
                })

        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }
}
export const layKhoaHocTheoDanhMucAction = (madanhmuc) => {
    return async (dispatch) => {
        try {
            const result = await quanLyKhoaHocSerVice.layKhoaHocTheoDanhMuc(madanhmuc);
            console.log("result: ", result.data);
            
                dispatch({
                    type: SET_KHOAHOC_DANHMUC,
                    arrKhoaHocTheoDanhMuc: result.data
                })

        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }
}
export const layThongTinKhoaHocAction = (makhoahoc) => {
    return async (dispatch) => {
        try {
            const result = await quanLyKhoaHocSerVice.layThongTinKhoaHoc(makhoahoc);
            console.log("result: ", result.data);
            
                dispatch({
                    type: SET_THONGTIN_KHOAHOC,
                    thongTinKhoaHoc: result.data
                })

        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }
}
// export const dangKyKhoaHocAction = (thongTinDangKy) => {
//     return async (dispatch) => {
//         try {
//             const result = await quanLyKhoaHocSerVice.dangKyKhoaHoc(thongTinDangKy);
//             console.log("resultDangKyKhoaHocThanhCong: ", result.data);
            

//         } catch (error) {
//             console.log("errorDangKyKhoaHoc: ", error.response?.data);

//         }
//     }
// }