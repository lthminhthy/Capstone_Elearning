
import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
    constructor() {
        super();
    }


    dangKy = (thongTinDangKy) => {
        return this.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKy)
    }

    dangNhap = (thongTinDangNhap) => {
        return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap)
    }
    thongTinTaiKhoan = () => {
        return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`)
    }
    capNhatThongTinNguoiDung = (thongTinCapNhat) => {
        return this.put(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, thongTinCapNhat)
    }
    xoaNguoiDung = (taiKhoan) => {
        return this.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
    }
    themNguoiDung = (thongTinNguoiDung) => {
        return this.post(`/api/QuanLyNguoiDung/ThemNguoiDung`,thongTinNguoiDung)
    }
    layDanhSachLoaiNguoiDung = () => {
        return this.get(`/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`)
    }
    timKiemNguoiDungTheoTen = (thongTin = '') => {
        if (thongTin.trim() != '') {
            return this.get(`/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUPID}&tuKhoa=${thongTin}`)
        }
        return this.get(`/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUPID}`)

    }
   
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService

