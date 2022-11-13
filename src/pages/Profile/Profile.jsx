import { SmileOutlined } from '@ant-design/icons'
import { Input, Space, Tabs } from 'antd'
import TabPane from 'antd/lib/tabs/TabPane'
import Search from 'antd/lib/transfer/search'
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import { thongTinTaiKhoanAction } from '../../redux/actions/QuanLyNguoiDungAction'
import { quanLyKhoaHocSerVice } from '../../services/QuanLyKhoaHocService'
import { ACCESS_TOKEN, USER_LOGIN } from '../../util/settings/config'
import './Profile.css'

const Profile = () => {
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
    const { thongTinTaiKhoanDefault } = useSelector(state => state.QuanLyNguoiDungReducer)
    const khoaHoc = thongTinTaiKhoanDefault.chiTietKhoaHocGhiDanh
    const [list, setList] = useState()
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
        let listFound=[];
        const found = list.find(element => element.tenKhoaHoc.toLowerCase() == value.toLowerCase())
 
     
        

        if( found === undefined){
            alert('Không tìm thấy khóa học')
            setList(khoaHoc)
        }else{
            listFound.push(found);
            setList(listFound)
        }
    };

    useEffect(() => {
        dispatch(thongTinTaiKhoanAction())
    }, [])

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

                                            }} className="bg-retro-second hover:bg-red-700 active:bg-yellow-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150">
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
                                        <div className="text-center mt-12">
                                            <h3 className="text-4xl font-semibold leading-normal mb-2 text-retro-primary ">
                                                {userLogin.taiKhoan}
                                            </h3>
                                            <div className="text-sm leading-normal mt-0 mb-2 text-retro-primary font-bold uppercase">
                                                <i className=" mr-2 text-lg text-blueGray-400" />
                                                Họ tên: {userLogin.hoTen}
                                            </div>
                                            <div className="mb-2 text-blueGray-600 mt-10">
                                                <i className="fas fa-briefcase mr-2 text-lg text-retro-primary" />
                                                <span className='text-retro-primary'>
                                                    Email: {userLogin.email}
                                                </span>

                                            </div>
                                            <div className="mb-2 text-blueGray-600">
                                                <i className="fas fa-university mr-2 text-lg text-retro-primary" />
                                                <span className='text-retro-primary'>Số điện thoại: {userLogin.soDT}</span>

                                            </div>

                                        </div>
                                        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                            <div className="flex flex-wrap justify-center">
                                                <div className="w-full lg:w-9/12 px-4">
                                                    <div className="mb-2 text-blueGray-400">
                                                        {/* {userLogin.maLoaiNguoiDung} */}
                                                        {userLogin.maLoaiNguoiDung === 'GV' ? <NavLink className='text-xs sm:text-sm hover:text-white text-retro-primary hover:bg-retro-primary bg-white border-black border p-2 rounded-lg' to='/admin/khoahoc'>Đến trang Admin</NavLink> : <SmileOutlined />}

                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </TabPane>
                                    <TabPane tab='Khóa học của tôi' key='2'>
                                        <div className="w-full bg-retro-third">
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
                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                                    {
                                                        list?.map((thongTin, index) => {
                                                            console.log("thongTin: ", thongTin);
                                                            return <div key={index} className="w-full bg-retro-second rounded-xl sahdow-lg overflow-hidden flex flex-col md:flex-row">
                                                                <div className="w-full md:w-2/5 h-80">
                                                                    <img className="bg-retro-second self-center flex-shrink-0 bg-center bg-cover object-center object-scale-down w-full h-full p-2" src={thongTin.hinhAnh} alt="photo" />
                                                                </div>
                                                                <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-4">
                                                                    <p className="text-2xl text-retro-primary font-bold">{thongTin.tenKhoaHoc}</p>
                                                                    <p className="text-sm text-retro-beige font-normal">Lượt xem: {thongTin.luotXem}</p>
                                                                    <p className="text-retro-primary leading-relaxed font-normal ">{thongTin.moTa.length > 200 ? thongTin.moTa.substring(0, 200) : thongTin.moTa}</p>
                                                                    <p className="text-sm text-retro-beige font-normal">Đánh giá: {thongTin.danhGia}</p>
                                                                    <div className="flex justify-start space-x-2">
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
                                                                        }} className="font-bold hover:bg-retro-primary bg-retro-beige text-gray-500 hover:text-retro-beige px-4 py-1 rounded-lg">
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