import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const KhoaHoc = () => {
    const { danhSachKhoaHocAll } = useSelector(state => state.QuanLyKhoaHocReducer)
    return (
        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
            <p className="p-2 text-sm font-medium tracking-wider text-center uppercase"></p>
            <h1 className="text-3xl font-bold leading-none text-center sm:text-4xl text-retro-primary">Tất Cả Khóa Học</h1>
            <div className="flex flex-row flex-wrap justify-center mt-8">

                {
                    danhSachKhoaHocAll?.map((khoaHoc, index) => {
                        return <div key={index} className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-retro-primary ">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-retro-second" src={khoaHoc?.hinhAnh} />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-bold leading-snug text-retro-second  ">{khoaHoc.tenKhoaHoc}</p>
                                <p className='text-retro-beige'>{khoaHoc.moTa.length > 200 ? khoaHoc.moTa.substring(0, 200) + '...' : khoaHoc.moTa}</p>
                            </div>
                            <div className="flex items-center justify-center p-3 space-x-3 border-t-2 border-retro-primary">
                                <NavLink className="group flex items-center justify-between rounded-lg border border-retro-second hover:border-retro-beige px-5 py-3 text-retro-second  transition-colors bg-retro-primary focus:outline-none focus:ring hover:bg-retro-beige active:bg-retro-second" to="/detail">
                                    <span className="font-medium transition-colors group-hover:text-retro-primary ">
                                        Đăng ký
                                    </span>

                                </NavLink>

                            </div>
                        </div>
                    })
                }


            </div>
        </div>
    )
}

export default KhoaHoc