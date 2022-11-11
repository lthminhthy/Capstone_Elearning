import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class QuanLyKhoaHocService extends baseService{
    constructor(){
        super();
    }

    layDanhSachKhoaHoc = () => {
        return this.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUPID}`)
    }
    layDanhMucKhoaHoc = () => {
        return this.get(`/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`)
    }
    layKhoaHocTheoDanhMuc = (maDanhMuc) => {
        return this.get(`/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${GROUPID}`)
    }




}

export const quanLyKhoaHocSerVice = new QuanLyKhoaHocService

