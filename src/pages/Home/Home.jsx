import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { layDanhSachKhoaHocAction } from '../../redux/actions/QuanLyKhoaHocAction'

const Home = () => {
  const dispatch = useDispatch()
  const {danhSachKhoaHocDefault} = useSelector(state => state.QuanLyKhoaHocReducer)
  console.log("danhSachKhoaHoc: ", danhSachKhoaHocDefault);

  useEffect(() => {
    dispatch(layDanhSachKhoaHocAction())
  },[])
  return (
    <Fragment className='z-10'>
      <section className="relative bg-[url(https://wcm-cdn.wacom.com/-/media/images/discover-2020/elearning/wacom-elearning-home-tablets-for-teaching-f.jpg?h=573&iar=0&w=1400&rev=c75499ea46584a40858fee4215a0c613&hash=1B5BA0BD014AE846B57C4EC199C9AF0D)] bg-cover bg-center bg-no-repeat z-0">
        <div className="absolute inset-0 bg-retro-beige sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25" />
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl xl:text-7xl text-retro-primary">
              Một sự khởi đầu
              <strong className="block font-extrabold text-retro-second xl:text-6xl">
                cho sự nghiệp của bạn
              </strong>
            </h1>
            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed xl:text-4xl">
              Trở thành lập trình viên chuyên nghiệp tại CyberSoft
            </p>
            <div className="mt-8 mb-5 flex flex-wrap gap-4 text-center">
              <NavLink to="/khoahoc" className="mb-5 block w-full rounded bg-retro-second px-12 py-3 text-sm font-medium text-retro-beige shadow hover:bg-retro-beige hover:text-retro-second focus:outline-none focus:ring active:bg-retro-second sm:w-auto xl:mr-5">
                Xem Khóa Học
              </NavLink>
              <a href="https://www.facebook.com/lophocviet/" className="mb-5 block w-full rounded bg-retro-third px-12 py-3 text-sm font-medium text-retro-primary shadow hover:text-retro-beige hover:bg-retro-second focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                Tư Vấn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-retro-beige z-10">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase"></p>
          <h1 className="text-3xl font-bold leading-none text-center sm:text-4xl text-retro-primary">Các Khóa Học Mới</h1>
          <div className="flex flex-row flex-wrap justify-center mt-8">
          
            {
              danhSachKhoaHocDefault?.slice(0,8).map((khoaHoc, index) => {
                return <div key={index} className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-retro-primary ">
                <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-retro-second" src={khoaHoc?.hinhAnh} />
                <div className="flex-1 my-4">
                  <p className="text-xl font-bold leading-snug text-retro-second  ">{khoaHoc.tenKhoaHoc}</p>
                  <p className='text-retro-beige'>{khoaHoc.moTa.length > 200 ? khoaHoc.moTa.substring(0,200) + '...' : khoaHoc.moTa}</p>
                </div>
                <div className="flex items-center justify-center p-3 space-x-3 border-t-2 border-retro-primary">
                  <NavLink className="group flex items-center justify-between rounded-lg border border-retro-second hover:border-retro-beige px-5 py-3 text-retro-second  transition-colors bg-retro-primary focus:outline-none focus:ring hover:bg-retro-beige active:bg-retro-second" to={`/chitiet/${khoaHoc.maKhoaHoc}`}>
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
      </section>
    </Fragment>
    
      






  )
}

export default Home