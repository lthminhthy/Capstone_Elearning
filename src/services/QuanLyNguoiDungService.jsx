
import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService{
    constructor(){
        super();
    }

    
    dangKy = (thongTinDangKy) => {
        return this.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKy)
    }
   
    dangNhap = (thongTinDangNhap) => {
        return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap)
    }
   




}

export const quanLyNguoiDungService = new QuanLyNguoiDungService

