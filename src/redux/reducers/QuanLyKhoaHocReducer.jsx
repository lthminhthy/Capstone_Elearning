import { SET_DANH_MUC_KHOA_HOC, SET_DANH_SACH_KHOA_HOC, SET_KHOAHOC_DANHMUC } from "../actions/types/QuanLyKhoaHocType"

const stateDefault = {
    danhSachKhoaHoc: [],
    danhMucKhoaHoc:[],
    arrKhoaHocTheoDanhMuc:[]
}

export const QuanLyKhoaHocReducer = (state = stateDefault, action) => {
    switch(action.type){
        case SET_DANH_SACH_KHOA_HOC: {
            state.danhSachKhoaHoc = action.danhSachKhoaHoc;
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

        default: return {...state}

    }
}