import React, { useState } from 'react'
import {
    Form,
    Input,
} from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { GROUPID } from '../../util/settings/config';
import { useFormik } from 'formik';
import { quanLyNguoiDungService } from '../../services/QuanLyNguoiDungService';
import * as Yup from "yup";
import isEmailValidator from 'validator/lib/isEmail';
import './DangKy.css'


const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const DangKy = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const formik = useFormik({

        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDT: '',
            maNhom: GROUPID,
            hoTen: '',

        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string()
                .min(3, "Tài khoản có ít nhất 3 kí tự")
                .required("Vui lòng nhập tài khoản!"),
            hoTen: Yup.string()
                .min(3, "Họ tên có ít nhất 3 kí tự")
                .required("Vui lòng nhập họ tên!"),
            // email: Yup
            //     .string()
            //     .email("Không đúng định dạng email")
            //     .required("Vui lòng nhập email"),
            //     .test("is-valid", (message) => `${message.path} is invalid`, (value) => value ? isEmailValidator(value) : new Yup.ValidationError("Invalid value")),

            email: Yup.string()
                .required("Vui lòng nhập email!"),
            soDT: Yup.string()
                .required("Vui lòng nhập số điện thoại!"),
            matKhau: Yup.string()
                .required("Vui lòng nhập mật khẩu!"),
            // confirm: Yup.string()
            //     .required("Vui lòng nhập lại mật khẩu!"),
        }
        ),
        onSubmit: (values) => {
            console.log("values: ", values);

            quanLyNguoiDungService.dangKy(values).then((result) => {
                console.log("result: ", result);
                alert("Bạn đã đăng ký thành công")
                navigate('/dangnhap')
            }).catch((error) => {
                console.log("error: ", error);
                alert("Đăng ký không thành công, hãy thử lại!")
            })
        }
    });





    return (
        <div className="bg-retro-third h-screen w-screen text-center">
            <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
                {/* Row */}
                <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                    {/* Col */}
                    <div className="w-full h-auto bg-retro-third hidden lg:block lg:w-5/12 bg-cover rounded-l-lg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80")' }} />
                    {/* Col */}
                    <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                        <h1 className="text-4xl text-center font-thin mb-10">Đăng ký tài khoản</h1>


                        <Form
                            {...formItemLayout}
                            form={form}
                            name="register"
                            onFinish={onFinish}
                            onSubmitCapture={formik.handleSubmit}

                            scrollToFirstError
                        >

                            <Form.Item
                                label="Tài khoản"
                                tooltip="Tên tài khoản bạn muốn đặt?"

                            >
                                <Input name='taiKhoan' onChange={formik.handleChange} />
                                {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                                    <p className='text-red-500 mb-0 text-xs text-left'>{formik.errors.taiKhoan}</p>
                                )}
                            </Form.Item>
                            <Form.Item
                                label="E-mail"

                            >
                                <Input name='email' onChange={formik.handleChange} />
                                {formik.errors.email && formik.touched.email && (
                                    <p className='text-red-500 mb-0 text-xs  text-left'>{formik.errors.email}</p>
                                )}
                            </Form.Item>
                            <Form.Item
                                label="Họ tên"
                                tooltip="Tên đầy đủ của bạn?"

                            >
                                <Input name="hoTen" onChange={formik.handleChange} />
                                {formik.errors.hoTen && formik.touched.hoTen && (
                                    <p className='text-red-500 mb-0 text-xs  text-left'>{formik.errors.hoTen}</p>
                                )}
                            </Form.Item>
                            <Form.Item
                                label="Số điện thoại"
                                tooltip="Số điện thoại của bạn?"

                            >
                                <Input name="soDT" onChange={formik.handleChange} />
                                {formik.errors.soDT && formik.touched.soDT && (
                                    <p className='text-red-500 mb-0 text-xs  text-left'>{formik.errors.soDT}</p>
                                )}
                            </Form.Item>

                            <Form.Item
                                name="matKhau"
                                label="Password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password name='matKhau' onChange={formik.handleChange} />
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="Confirm Password"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Nhập lại mật khẩu!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('matKhau') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('Mật khẩu chưa trùng khớp!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <div className='w-full'>
                                <button className="bg-yellow-500 text-gray-100 p-4 w-1/2 text-center rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-yellow-600
                          shadow-lg ">
                                    Đăng Ký
                                </button>
                            </div>





                        </Form>
                        <div className="text-center mt-4">

                            <div>
                                <NavLink className="no-underline hover:underline text-blue-dark text-xs" to="/dangnhap">
                                    Bạn đã có tài khoản? Đăng nhập!
                                </NavLink>
                            </div>

                        </div>


                    </div>

                </div>
            </div>
        </div>


    );
}

export default DangKy