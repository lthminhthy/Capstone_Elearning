import { SmileOutlined } from '@ant-design/icons'
import { Input, Space, Tabs } from 'antd'
import TabPane from 'antd/lib/tabs/TabPane'
import Search from 'antd/lib/transfer/search'
import { useFormik } from 'formik'
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import { thongTinTaiKhoanAction } from '../../redux/actions/QuanLyNguoiDungAction'
import { quanLyKhoaHocSerVice } from '../../services/QuanLyKhoaHocService'
import { quanLyNguoiDungService } from '../../services/QuanLyNguoiDungService'
import { ACCESS_TOKEN, GROUPID, USER_LOGIN } from '../../util/settings/config'
import './Profile.css'

const Profile = () => {
    const { thongTinTaiKhoanDefault } = useSelector(state => state.QuanLyNguoiDungReducer)
    const khoaHoc = thongTinTaiKhoanDefault.chiTietKhoaHocGhiDanh
    const [list, setList] = useState()
    const [form, setForm] = useState(false)
    useEffect(() => {
        setList(khoaHoc)
    }, [khoaHoc])

    console.log("list: ", list);
    console.log("thongTinTaiKhoan: ", thongTinTaiKhoanDefault);
    // console.log("userLogin: ", userLogin);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onChange = (key) => {
        console.log(key);
    };
    const { Search } = Input;
    const onSearch = (value) => {
        if (!value) {
            setList(khoaHoc)
            return;
        }
        let listFound = [];
        const found = list.find(element => element.tenKhoaHoc.toLowerCase() == value.toLowerCase())


        if (found === undefined) {
            alert('Không tìm thấy khóa học')
            setList(khoaHoc)
        } else {
            listFound.push(found);
            setList(listFound)
        }
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        dispatch(thongTinTaiKhoanAction())
    }, [])


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {

            taiKhoan: thongTinTaiKhoanDefault.taiKhoan,
            matKhau: thongTinTaiKhoanDefault.matKhau,
            hoTen: thongTinTaiKhoanDefault.hoTen,
            soDT: thongTinTaiKhoanDefault.soDT,
            maLoaiNguoiDung: thongTinTaiKhoanDefault.maLoaiNguoiDung,
            maNhom: GROUPID,
            email: thongTinTaiKhoanDefault.email

        },

        onSubmit: (values) => {
            console.log("valuesProfile: ", values);
            quanLyNguoiDungService.capNhatThongTinNguoiDung(values).then((result) => {
                console.log("result: ", result);
                alert('Cập nhật thông tin thành công!')
                window.location.reload();

            }).catch((error) => {
                console.log("error: ", error);
                alert('Cập nhật thông tin thất bại!')
                

            })


        }
    });


    const renderProfile = () => {
        return form === false ? 
        <div className="text-center mt-12">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-retro-primary ">
                {thongTinTaiKhoanDefault.taiKhoan}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-retro-primary font-bold uppercase">
                <i className=" mr-2 text-lg text-blueGray-400" />
                Họ tên: {thongTinTaiKhoanDefault.hoTen}
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
                <i className="fas fa-briefcase mr-2 text-lg text-retro-primary" />
                <span className='text-retro-primary'>
                    Email: {thongTinTaiKhoanDefault.email}
                </span>

            </div>
            <div className="mb-2 text-blueGray-600">
                <i className="fas fa-university mr-2 text-lg text-retro-primary" />
                <span className='text-retro-primary'>Số điện thoại: {thongTinTaiKhoanDefault.soDT}</span>

            </div>
            <div className="mb-2 text-blueGray-600">
                <i className="fas fa-university mr-2 text-lg text-retro-primary" />
                <span className='text-retro-primary'>Mật khẩu: {thongTinTaiKhoanDefault.matKhau}</span>

            </div>
            <div className='w-full lg:w-9/12 px-4 text-right'>
                                            <button className='font-bold text-retro-second hover:text-retro-primary underline' onClick={() => {
                                                setForm(true)
                                            }}>Cập Nhật</button>
                                        </div>
        </div>: <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Chỉnh sửa thông tin</h2>
                <form onSubmit={formik.handleSubmit}
                
                >
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-retro-primary dark:text-gray-200" htmlFor="username">Tài khoản</label>
                            <input  type="text" className="block w-full px-4 py-2 mt-2 text-retro-primary bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" name='taiKhoan' value={formik.values.taiKhoan} disabled  />
                        
                        </div>
                        <div>
                            <label className="text-retro-primary dark:text-gray-200" htmlFor="emailAddress">Mật khẩu</label>
                            <input type="text" className="block w-full px-4 py-2 mt-2 text-retro-primary bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" value={formik.values.matKhau}  onChange={formik.handleChange} name='matKhau'/>
                        </div>
                        <div>
                            <label className="text-retro-primary dark:text-gray-200" htmlFor="password">Họ tên</label>
                            <input  type="text" className="block w-full px-4 py-2 mt-2 text-retro-primary bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" value={formik.values.hoTen} onChange={formik.handleChange} name='hoTen' />
                        </div>
                        <div>
                            <label className="text-retro-primary dark:text-gray-200" htmlFor="passwordConfirmation">Số điện thoại</label>
                            <input  type="text" className="block w-full px-4 py-2 mt-2 text-retro-primary bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" value={formik.values.soDT} onChange={formik.handleChange} name='soDT'/>
                        </div>
                        <div>
                            <label className="text-retro-primary dark:text-gray-200" htmlFor="passwordConfirmation">Email</label>
                            <input type="text" className="block w-full px-4 py-2 mt-2 text-retro-primary bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" value={formik.values.email} onChange={formik.handleChange} name='email'/>
                        </div>
                    </div>
                    <div className="flex justify-end mt-6">
                        <button  className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-retro-second rounded-md hover:bg-retro-third  focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>
            </section>




    }
    return (
        <Fragment>

            <main className="profile-page">
                <section className="relative block h-500-px">
                    <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80")' }}>
                        <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black" />
                    </div>
                    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: 'translateZ(0px)' }}>
                        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x={0} y={0}>
                            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100" />
                        </svg>
                    </div>
                </section>
                <section className="relative py-16 bg-blueGray-200">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative">
                                            <img alt="..." src="https://flyclipart.com/thumb2/male-user-icon-transparent-png-19823.png" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                        <div className="py-6 px-3 mt-32 sm:mt-0">
                                            <button onClick={() => {
                                                localStorage.removeItem(USER_LOGIN);
                                                localStorage.removeItem(ACCESS_TOKEN);
                                                navigate('/home');
                                                window.location.reload();

                                            }} className="bg-retro-third hover:bg-red-700 active:bg-yellow-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150">
                                                Đăng xuất
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-1">





                                    </div>
                                </div>
                                <Tabs
                                    onChange={onChange}
                                    type="card"

                                >
                                    <TabPane tabBarStyle tab='Thông tin cá nhân' key='1'>

                                        {renderProfile()}

                                        
                                        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                            <div className="flex flex-wrap justify-center">
                                                <div className="w-full lg:w-9/12 px-4">
                                                    <div className="mb-2 ">
                                                        {thongTinTaiKhoanDefault.maLoaiNguoiDung === 'GV' ? <NavLink className='text-xs sm:text-sm hover:text-white text-retro-primary hover:bg-retro-primary bg-white border-black border p-2 rounded-lg' to='/admin/quanlynguoidung'>Đến trang Admin</NavLink> : <SmileOutlined />}

                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </TabPane>
                                    <TabPane tab='Khóa học của tôi' key='2'>
                                        <div className="w-full ">
                                            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                                                <div className="text-center pb-12">
                                                    {/* <h2 className="text-base font-bold text-indigo-600">
                                                        We have the best equipment in the market
                                                    </h2> */}
                                                    <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl font-heading text-retro-primary">
                                                        Các khóa học đã đăng ký
                                                    </h1>
                                                </div>
                                                <div>
                                                    <Search
                                                        placeholder="Nhập khóa học cần tìm"
                                                        allowClear
                                                        enterButton="Search"
                                                        size="large"
                                                        onSearch={onSearch}
                                                        className='mb-5'
                                                    />

                                                </div>
                                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                                    {
                                                        list?.map((thongTin, index) => {
                                                            return <div key={index} className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                                                                <img className="rounded-t-lg p-8 h-56 w-full bg-retro-beige" src={thongTin.hinhAnh} alt="product image" />
                                                                <div className="px-5 pb-5 mt-3">
                                                                    <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{thongTin.tenKhoaHoc}</h3>
                                                                    <div className="flex items-center mt-2.5 mb-5">
                                                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{thongTin.danhGia}</span>

                                                                        <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                                            </path>
                                                                        </svg>

                                                                    </div>
                                                                    <div className='h-36'>
                                                                        <p>
                                                                            {thongTin.moTa.length > 200 ? thongTin.moTa.substring(0, 200) : thongTin.moTa}
                                                                        </p>
                                                                    </div>
                                                                    <div className="flex items-center justify-between">

                                                                        <button onClick={() => {
                                                                            quanLyKhoaHocSerVice.huyKhoaHoc({
                                                                                "maKhoaHoc": thongTin.maKhoaHoc,
                                                                                "taiKhoan": thongTinTaiKhoanDefault.taiKhoan
                                                                            }).then((result) => {
                                                                                console.log("result: ", result);
                                                                                alert('Đã hủy ghi danh khóa học!')
                                                                                dispatch(thongTinTaiKhoanAction())


                                                                            }).catch((error) => {
                                                                                console.log("error: ", error);
                                                                                alert('Hủy ghi danh không thành công')

                                                                            })
                                                                        }} className="font-bold hover:bg-retro-primary bg-retro-second text-retro-beige hover:text-retro-beige px-4 py-1 rounded-lg text-center">
                                                                            Hủy
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        })
                                                    }





                                                </div>
                                                

                                            </section>
                                        </div>


                                    </TabPane>

                                </Tabs>

                            </div>
                        </div>
                    </div>

                </section>
            </main>

        </Fragment>

    )
}

export default Profile