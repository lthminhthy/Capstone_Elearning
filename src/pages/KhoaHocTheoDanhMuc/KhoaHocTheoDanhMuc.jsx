import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { layKhoaHocTheoDanhMucAction } from '../../redux/actions/QuanLyKhoaHocAction'

const KhoaHocTheoDanhMuc = () => {
    const dispatch = useDispatch()
    const { madanhmuc } = useParams()
    const {arrKhoaHocTheoDanhMuc} = useSelector(state => state.QuanLyKhoaHocReducer)
    console.log("arrKhoaHocTheoDanhMuc: ", arrKhoaHocTheoDanhMuc);
    console.log("maDanhMuc: ", madanhmuc);
    useEffect(() => {
        dispatch(layKhoaHocTheoDanhMucAction(madanhmuc))
    },[madanhmuc])
    
    return (
        <section className="py-6 bg-retro-beige ">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase"></p>
                <h1 className="text-3xl font-bold leading-none text-center sm:text-4xl text-retro-red">Các Khóa Học Phổ Biến</h1>
                <div className="flex flex-row flex-wrap justify-center mt-8">

                    {
                        arrKhoaHocTheoDanhMuc?.map((khoaHoc, index) => {
                            return <div key={index} className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-retro-red ">
                                <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-retro-green" src={khoaHoc?.hinhAnh} />
                                <div className="flex-1 my-4">
                                    <p className="text-xl font-semibold leading-snug text-retro-beige ">{khoaHoc.tenKhoaHoc}</p>
                                    <p className='text-retro-beige'>{khoaHoc.moTa.length > 100 ? khoaHoc.moTa.substring(0, 100) + '...' : khoaHoc.moTa}</p>
                                    <p className='text-retro-beige'>Lượt xem: {khoaHoc.luotXem}</p>
                                </div>
                                <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                                    <a className="group flex items-center justify-between rounded-lg border border-retro-beige hover:border-retro-beige px-5 py-3 text-retro-beige  transition-colors bg-retro-red focus:outline-none focus:ring hover:bg-retro-beige active:bg-retro-red" href="/download">
                                        <span className="font-medium transition-colors group-hover:text-retro-red hover:text-retro-red">
                                            Đăng ký
                                        </span>

                                    </a>

                                </div>
                            </div>
                        })
                    }


                </div>
            </div>
        </section>
    )
}

export default KhoaHocTheoDanhMuc