import React, { useEffect, useState } from 'react'
import {
    Button,
    DatePicker,
    Form,
    Input,
    Radio,
    Select,
} from 'antd';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { GROUPID } from '../../../util/settings/config';
import { useNavigate } from 'react-router';
import { quanLyNguoiDungService } from '../../../services/QuanLyNguoiDungService';
import { SET_DANHSACH_USER, SET_MALOAI_USER } from '../../../redux/actions/types/QuanLyNguoiDungType';
import { layDanhSachLoaiNguoiDungAction, thongTinTaiKhoanAction } from '../../../redux/actions/QuanLyNguoiDungAction';
import { layDanhMucKhoaHocAction } from '../../../redux/actions/QuanLyKhoaHocAction';
import moment from 'moment';
import { quanLyKhoaHocSerVice } from '../../../services/QuanLyKhoaHocService';


const AdminThemKhoaHoc = () => {
    const [componentSize, setComponentSize] = useState('default');
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [tenKH, setTenKH] = useState()
    const [file, setFile] = useState()
    const { thongTinTaiKhoanDefault } = useSelector(state => state.QuanLyNguoiDungReducer)
    // console.log("thongTinTaiKhoanDefault: ", thongTinTaiKhoanDefault);

    const { danhMucKhoaHoc } = useSelector(state => state.QuanLyKhoaHocReducer)
    const { danhsachUser } = useSelector(state => state.QuanLyNguoiDungReducer)
    const [imgSrc, setImgSrc] = useState('');


    useEffect(() => {
        dispatch(layDanhMucKhoaHocAction())
        dispatch(thongTinTaiKhoanAction())

        quanLyNguoiDungService.layDanhSachNguoiDung().then((result) => {
            console.log("result: ", result);
            dispatch({
                type: SET_DANHSACH_USER,
                danhsachUser: result.data
            })

        }).catch((error) => {
            console.log("error: ", error);

        })
    }, [])


    const formik = useFormik({
        initialValues: {
            maKhoaHoc: '',
            tenKhoaHoc: '',
            moTa: '',
            luotXem: 0,
            maNhom: GROUPID,
            danhGia: 0,
            hinhAnh: '',
            ngayTao: '',
            maDanhMucKhoaHoc: '',
            taiKhoanNguoiTao: '',

        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string()
                .min(3, "Mininum 3 characters")
                .required("Vui lòng nhập tài khoản!"),
            matKhau: Yup.string()
                .min(4, "Mininum 4 characters")
                .required("Vui lòng nhập mật khẩu!"),
            email: Yup.string()
                .required("Vui lòng nhập email!"),
            soDT: Yup.string()
                .required("Vui lòng nhập số điện thoại!"),
            hoTen: Yup.string()
                .required("Vui lòng nhập họ tên!"),
            maLoaiNguoiDung: Yup.string()
                .required("Chọn loại người dùng!"),
        }),

        onSubmit: (values) => {
            console.log("valuesubmit: ", values);

             quanLyKhoaHocSerVice.themKhoaHoc(values).then((result) => {
                let frm = new FormData();
                frm.append('file', file);
                frm.append('tenKhoaHoc', tenKH);
                quanLyKhoaHocSerVice.themKhoaHocUploadHinh(frm).then((result) => {
                    console.log("resultUpload: ", result);
                }).catch((error) => {
                    console.log("error: ", error);
                })
             })
         
        }
    });
    const handleChangeFile = (e) => {

        let file = e.target.files[0];
        setFile(file)
        if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg') {
            // tao doi tuong doc file
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setImgSrc(e.target.result)
            }
            formik.setFieldValue('hinhAnh', file.name)
        }

    }
    const convertSelectNguoiTao = () => {
        return danhsachUser?.map((user, index) => {

            if (user.maLoaiNguoiDung = 'GV') {
                // console.log("user: ", user);
                return { label: user.taiKhoan, value: user.taiKhoan }
            }

        })

    }
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const convertSelectKH = () => {
        return danhMucKhoaHoc?.map((KH, index) => {
            return { label: KH.tenDanhMuc, value: KH.maDanhMuc }
        })

    }
    const handleChangeKH = (values) => {
        formik.setFieldValue('maDanhMucKhoaHoc', values)
    }
    const handleChangeNguoiTao = (values) => {
        formik.setFieldValue('taiKhoanNguoiTao', values)
    }
    const handleChangeTenKH = (values) => {
        setTenKH(values.target.value)
        formik.setFieldValue('tenKhoaHoc', values.target.value)
    }






    const onChangeDate = (values) => {
        formik.setFieldValue('ngayTao', moment(values).format('DD/MM/YYYY'))
        console.log("ngayTao: ", moment(values).format('DD/MM/YYYY'));
    };
    const onOk = (values) => {

        formik.setFieldValue('ngayTao', moment(values).format('DD/MM/YYYY'))
        console.log("ngayTao: ", moment(values).format('DD/MM/YYYY'));
    };




    return (
        <div className='container'>
            <Form
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}

            >
                <h2 className='text-xl mb-5'>Thêm Khóa Học</h2>
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Mã khóa học">
                    <Input name='maKhoaHoc' onChange={formik.handleChange} />
                    {formik.errors.maKhoaHoc && formik.touched.maKhoaHoc && (
                        <p className='text-red-500 mb-0 text-sm'>{formik.errors.maKhoaHoc}</p>
                    )}
                </Form.Item>
                <Form.Item label="Tên khóa học">
                    <Input name='tenKhoaHoc' onChange={handleChangeTenKH} />
                    {formik.errors.tenKhoaHoc && formik.touched.tenKhoaHoc && (
                        <p className='text-red-500 mb-0 text-sm'>{formik.errors.tenKhoaHoc}</p>
                    )}
                </Form.Item>
                <Form.Item label="Danh mục khóa học:" name='maDanhMucKhoaHoc'>
                    <Select name='maDanhMucKhoaHoc'
                        options={convertSelectKH()}
                        placeholder="Chọn danh mục khóa học"
                        onChange={handleChangeKH}

                    />

                </Form.Item>
                <Form.Item label="Ngày tạo">
                    <DatePicker format='DD/MM/YYYY' onOk={onOk} onChange={onChangeDate} />
                  
                </Form.Item>
                <Form.Item label="Đánh giá">
                    <Input type='number' name='danhGia' onChange={formik.handleChange} />
                   
                </Form.Item>
                <Form.Item label="Lượt xem">
                    <Input type='number' name='luotXem' onChange={formik.handleChange} />
                  
                </Form.Item>
                <Form.Item label="Người tạo:" name='taiKhoanNguoiTao'>
                    <Select name='taiKhoanNguoiTao'
                        options={convertSelectNguoiTao()}
                        placeholder="Chọn người tạo"
                        onChange={handleChangeNguoiTao}

                    />
                 

                </Form.Item>
                <Form.Item label="Hình Ảnh">
                    <div className='flex'>
                        <div>
                            <input type='file' onChange={handleChangeFile} accept='image/jpg, image/jpeg, image/png' />
                            <br />
                            <img style={{ width: 50, height: 50 }} src={imgSrc} alt="." />
                        </div>
                       

                    </div>



                </Form.Item>
                <Form.Item label="Mô tả">
                    <Input name='moTa' onChange={formik.handleChange} />
                
                </Form.Item>


                <div className='text-center'>
                    <Form.Item label='' >
                        <Button htmlType="submit" className='bg-blue-600 p-2 text-white rounded-lg hover:bg-blue-900 hover:text-white border hover:border-blue-600'>Thêm Người Dùng</Button>
                    </Form.Item>
                </div>

            </Form>
        </div>
    )
}

export default AdminThemKhoaHoc