import React, { useEffect, useState } from 'react'
import {
    Button,
    Form,
    Input,
    Radio,
    Select,
} from 'antd';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { GROUPID } from '../../../util/settings/config';
import { useNavigate, useParams } from 'react-router';
import { quanLyNguoiDungService } from '../../../services/QuanLyNguoiDungService';
import { SET_MALOAI_USER } from '../../../redux/actions/types/QuanLyNguoiDungType';
import { layDanhSachLoaiNguoiDungAction, thongTinTaiKhoanAction, timKiemNguoiDungTheoTenAction } from '../../../redux/actions/QuanLyNguoiDungAction';


const AdminChinhSuaNguoiDung = () => {
    const { danhSachNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer)
    console.log("danhSachNguoiDung: ", danhSachNguoiDung);
    const [componentSize, setComponentSize] = useState('default');
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams() 
    const user = danhSachNguoiDung[id]
    console.log("user: ", user);
  

    const { loaiND } = useSelector(state => state.QuanLyNguoiDungReducer)


    useEffect(() => {
        dispatch(layDanhSachLoaiNguoiDungAction())
       
    }, [])


    const formik = useFormik({
        initialValues: {
            taiKhoan: user.taiKhoan,
            matKhau: user.matKhau,
            email: user.email,
            soDT: user.soDt,
            maNhom: GROUPID,
            maLoaiNguoiDung: user.maLoaiNguoiDung,
            hoTen: user.hoTen,

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
            console.log("valueedit: ", values);
            quanLyNguoiDungService.capNhatThongTinNguoiDung(values).then((result) => {
                console.log("result: ", result);
                alert('Cập nhật thông tin thành công!')
                navigate('/admin/quanlynguoidung')

            }).catch((error) => {
                console.log("error: ", error);
                alert('Cập nhật thông tin thất bại!')
                navigate('/admin/quanlynguoidung')
            })

        }
    });


    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const convertSelectLND = () => {
        return loaiND?.map((ND, index) => {
            console.log("maLoaiND: ", loaiND);
            return { label: ND.tenLoaiNguoiDung, value: ND.maLoaiNguoiDung }
        })

    }
    const handleChangeLoaiND = (values) => {
        formik.setFieldValue('maLoaiNguoiDung', values)
      }

    


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
                <h2 className='text-xl mb-5'>Cập nhật thông tin người dùng</h2>
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Họ Tên">
                    <Input name='hoTen' onChange={formik.handleChange} value={formik.values.hoTen} />
                    {formik.errors.hoTen && formik.touched.hoTen && (
                        <p className='text-red-500 mb-0 text-sm'>{formik.errors.hoTen}</p>
                    )}
                </Form.Item>
                <Form.Item label="Tài Khoản">
                    <Input name='taiKhoan' disabled value={formik.values.taiKhoan} />
                    {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                        <p className='text-red-500 mb-0 text-sm'>{formik.errors.taiKhoan}</p>
                    )}
                </Form.Item>
                <Form.Item label="Mật Khẩu">
                    <Input name='matKhau' onChange={formik.handleChange} value={formik.values.matKhau}/>
                    {formik.errors.matKhau && formik.touched.matKhau && (
                        <p className='text-red-500 mb-0 text-sm'>{formik.errors.trailer}</p>
                    )}
                </Form.Item>
                <Form.Item label="Email">
                    <Input name='email' onChange={formik.handleChange} value={formik.values.email} />
                    {formik.errors.email && formik.touched.email && (
                        <p className='text-red-500 mb-0 text-sm'>{formik.errors.email}</p>
                    )}
                </Form.Item>
                <Form.Item label="Số điện thoại">
                    <Input name='soDT' onChange={formik.handleChange} value={formik.values.soDT}/>
                    {formik.errors.soDT && formik.touched.soDT && (
                        <p className='text-red-500 mb-0 text-sm'>{formik.errors.soDT}</p>
                    )}
                </Form.Item>
                <Form.Item label="Loại người dùng:" name='maLoaiNguoiDung'>
                    <Select name='maLoaiNguoiDung'
                        options={convertSelectLND()}
                        placeholder="Chọn loại người dùng"
                        onChange={handleChangeLoaiND}
                        value={formik.values.maLoaiNguoiDung}
                        
                    />
                    {formik.errors.maLoaiNguoiDung && formik.touched.maLoaiNguoiDung && (
                        <p className='text-red-500 mb-0 text-sm'>{formik.errors.maLoaiNguoiDung}</p>
                    )}

                </Form.Item>

                <div className='text-center'>
                    <Form.Item label='' >
                        <Button htmlType="submit" className='bg-blue-600 p-2 text-white rounded-lg hover:bg-blue-900 hover:text-white border hover:border-blue-600'>Cập nhật</Button>
                    </Form.Item>
                </div>

            </Form>
        </div>
    )
}

export default AdminChinhSuaNguoiDung