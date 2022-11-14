import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import { dangKyKhoaHocAction, layThongTinKhoaHocAction } from '../../redux/actions/QuanLyKhoaHocAction';
import { quanLyKhoaHocSerVice } from '../../services/QuanLyKhoaHocService';

const Detail = () => {

    const { makhoahoc } = useParams()
    const dispatch = useDispatch()
    const {taiKhoan} = useSelector(state => state.QuanLyNguoiDungReducer.userLogin)

    const { thongTinKhoaHoc } = useSelector(state => state.QuanLyKhoaHocReducer)
    console.log("thongTinKhoaHoc: ", thongTinKhoaHoc);

    const thongTinDangKy = {
        makhoahoc,taiKhoan
    }
    console.log("thongTinDangKy: ", thongTinDangKy);

    useEffect(() => {
        dispatch(layThongTinKhoaHocAction(makhoahoc))
    }, [])


    return (
        <Fragment>
            <section className="flex flex-col justify-center antialiased bg-retro-beige text-gray-200 min-h-screen">
                <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">
                    <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                        <a className="relative block group" href="#0">
                            <div className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true" />
                            <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                                <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={thongTinKhoaHoc.hinhAnh} width={540} height={303} alt="Blog post" />
                            </figure>
                        </a>
                        <div>
                            <header>
                                <div className="mb-3">
                                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                                        <li className="m-1">
                                            <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" href="#0">{thongTinKhoaHoc.maKhoaHoc}</a>
                                        </li>
                                        <li className="m-1">
                                            <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">{thongTinKhoaHoc.biDanh}</a>
                                        </li>
                                    </ul>
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                                    <a className=" text-retro-primary transition duration-150 ease-in-out" href="#0">{thongTinKhoaHoc.tenKhoaHoc}</a>
                                </h3>
                            </header>
                            <p className="text-lg text-retro-primary flex-grow">{thongTinKhoaHoc.moTa}</p>
                            <footer className="flex items-center mt-4">

                                <div>
                                    <button type='submit' onClick={() => {
                                        quanLyKhoaHocSerVice.dangKyKhoaHoc(thongTinDangKy).then((result) => {
                                            console.log("resultDangKy: ", result);
                                            alert('Đăng ký khóa học thành công!')

                                        }).catch((error) => {
                                            console.log("errorDangKy: ", error.s);
                                            alert('Đăng ký thất bại!')
                                        })
                                    }} className="group flex items-center justify-between rounded-lg border border-retro-primary hover:border-retro-beige px-5 py-3 text-retro-primary  transition-colors bg-retro-beige focus:outline-none focus:ring hover:bg-retro-second active:bg-retro-secondfont-medium group-hover:text-retro-beige">Đăng ký
            
                                    </button>
                                </div>
                            </footer>
                        </div>
                    </article>
                </div>
            </section>

            {/* <div x-show="open" class="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60" x-data="{ open: true }">
                <div className="bg-retro-primary text-sm p-3 md:rounded shadow-lg flex justify-between">

                    <NavLink className="text-retro-beige hover:text-retro-second " to='/' >
                        Trang chủ
                    </NavLink>
                </div>
            </div> */}
            <ButtonBack></ButtonBack>







        </Fragment>
    )
}

export default Detail