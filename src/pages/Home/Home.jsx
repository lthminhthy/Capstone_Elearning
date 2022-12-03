import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { layDanhSachKhoaHocAction } from '../../redux/actions/QuanLyKhoaHocAction'

const Home = () => {
  const dispatch = useDispatch()
  const { danhSachKhoaHocDefault } = useSelector(state => state.QuanLyKhoaHocReducer)
  console.log("danhSachKhoaHoc: ", danhSachKhoaHocDefault);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch(layDanhSachKhoaHocAction())
  }, [])

 
 

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
              <NavLink to="/khoahoc" className="mx-4 mb-5 block w-full rounded bg-retro-second px-12 py-3 text-sm font-medium text-retro-beige shadow hover:bg-retro-third hover:text-retro-primary focus:outline-none focus:ring active:bg-retro-second sm:w-auto xl:mr-5">
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
          <h1 className="text-3xl font-bold leading-none text-center sm:text-4xl text-retro-primary">Các Khóa Học Mới</h1>
          <div className="flex flex-row flex-wrap justify-center mt-8 gap-5 ">

            {
              danhSachKhoaHocDefault?.slice(0, 9).map((khoaHoc, index) => {
                return <div key={index} className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm w-full my-4 mx-2">
                  <div className=' w-full h-60'>
                      <img className="rounded-t-lg h-full w-full min-w-100" src={khoaHoc.hinhAnh} alt />
                  </div>

                  <div className="p-5 w-full ">
                    <a href="#">
                      <h5 className="text-retro-primary font-bold text-2xl tracking-tight mb-2 dark:text-white">{khoaHoc.tenKhoaHoc}</h5>
                    </a>
                    <p className="font-normal text-retro-primary mb-3 dark:text-gray-400 h-24 ">{khoaHoc.moTa.length > 150 ? khoaHoc.moTa.substring(0, 150) + '...' : khoaHoc.moTa}</p>
                    <NavLink  className="text-retro-beige bg-retro-third hover:bg-retro-second focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 hover:text-retro-beige dark:focus:ring-blue-800" to={`/chitiet/${khoaHoc.maKhoaHoc}`}>
                      Đăng ký
                      <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
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