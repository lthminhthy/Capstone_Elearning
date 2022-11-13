import { SET_DANH_MUC_KHOA_HOC, SET_DANH_SACH_KHOA_HOC, SET_KHOAHOC_DANHMUC, SET_THONGTIN_KHOAHOC } from "../actions/types/QuanLyKhoaHocType"

const stateDefault = {
    danhSachKhoaHoc: [],
    danhSachKhoaHocDefault: [],
    danhSachKhoaHocAll: [],
    danhMucKhoaHoc:[],
    arrKhoaHocTheoDanhMuc:[],
    
    
}

export const QuanLyKhoaHocReducer = (state = stateDefault, action) => {
    switch(action.type){
        case SET_DANH_SACH_KHOA_HOC: {
            state.danhSachKhoaHoc = action.danhSachKhoaHoc;
            state.danhSachKhoaHocDefault = action.danhSachKhoaHoc;
            state.danhSachKhoaHocAll = action.danhSachKhoaHoc;
            return {...state}
        }
        case SET_DANH_MUC_KHOA_HOC: {
            state.danhMucKhoaHoc = action.danhMucKhoaHoc;
            return {...state}
        }
        case SET_KHOAHOC_DANHMUC: {
            state.arrKhoaHocTheoDanhMuc = action.arrKhoaHocTheoDanhMuc;
            return {...state}
        }
        case SET_THONGTIN_KHOAHOC: {
            state.thongTinKhoaHoc = action.thongTinKhoaHoc;
            return {...state}
        }

        default: return {...state}

    }
}