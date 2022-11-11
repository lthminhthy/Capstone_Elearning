import { quanLyKhoaHocSerVice } from "../../services/QuanLyKhoaHocService";
import { SET_DANH_MUC_KHOA_HOC, SET_DANH_SACH_KHOA_HOC, SET_KHOAHOC_DANHMUC } from "./types/QuanLyKhoaHocType";

export const layDanhSachKhoaHocAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyKhoaHocSerVice.layDanhSachKhoaHoc();
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