import React, { Fragment, useEffect, useState } from 'react'
import { Transition } from "@headlessui/react";
import { Input, Menu, Space } from 'antd';
import { useNavigate } from 'react-router';
import MenuHeader from '../MenuHeader/MenuHeader';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachKhoaHocAction } from '../../redux/actions/QuanLyKhoaHocAction';
import _ from 'lodash';


// antd
const { Search } = Input;


const onSearch = (value) => console.log(value);

const Header = () => {

  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
  console.log("userLogin: ", userLogin);

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])



  // login/register
  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return <Fragment>
        <button className="self-center px-8 py-3 rounded  hover:bg-retro-beige hover:text-retro-primary  text-retro-beige font-semibold " onClick={() => {
          navigate('/dangnhap')
        }}>Đăng Nhập</button>
        <button className="hover:bg-retro-beige hover:text-retro-primary  text-retro-beige self-center px-8 py-3 font-semibold rounded " onClick={() => {
          navigate('/dangky')
        }}>Đăng Ký</button>
      </Fragment>
    }
    return <button onClick={() => {
      navigate("/profile")
    }}>
      <div className='flex justify-center items-center mr-4'>
        <div className="overflow-hidden relative w-8 h-8 bg-black rounded-full dark:bg-gray-600">
          <svg className="absolute -left-1 w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>


        </div>
        <span className="ml-3 font-medium text-white dark:text-gray-300">{userLogin.taiKhoan}</span>
      </div>
    </button>


  }
  const renderLoginResponsive = () => {
    if (_.isEmpty(userLogin)) {
      return <Fragment>
        <NavLink
          to="/dangnhap"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-3 rounded-md text-sm font-medium"
        >
          Đăng Nhập
        </NavLink>
        <NavLink
          to="/dangky"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-3 rounded-md text-sm font-medium"
        >
          Đăng Ký
        </NavLink>
      </Fragment>
    }
    return <Fragment>
      <button onClick={() => {
        navigate("/profile")
      }}>
        <div className='flex justify-center items-center mr-4'>
          <div className="overflow-hidden relative w-8 h-8 bg-black rounded-full dark:bg-gray-600">
            <svg className="absolute -left-1 w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>


          </div>
          <span className="ml-3 font-medium text-white dark:text-gray-300">{userLogin.taiKhoan}</span>
        </div>
      </button>
    </Fragment>


  }

  const onSearch = (value) => {
    console.log("value: ", value);

    // call api layDanhSachKhoaHoc theo ten Khoa Hoc
    dispatch(layDanhSachKhoaHocAction(value, navigate));


  };


  return (
    <div>
      <nav className="bg-retro-primary h-fit">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <NavLink to="/">
                  <img
                    className="h-8 w-8"
                    src="https://i.imgur.com/lC22izJ.png"
                    alt="Workflow"
                  />
                </NavLink>

              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">


                  <MenuHeader></MenuHeader>


                </div>

              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink to='/tintuc' className='text-retro-beige hover:text-retro-second'>Tin Tức</NavLink>
                </div>

              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink to='lienhe' className='text-retro-beige hover:text-retro-second'>Liên Hệ</NavLink>
                </div>

              </div>
            </div>
            <div className=' items-center justify-between md:flex hidden'>
              <div className="relative mx-auto text-retro-primary ">
                <Space direction="vertical" >
                  <Search
                    placeholder="Nhập khóa học cần tìm"
                    allowClear
                    onSearch={onSearch}
                    style={{
                      width: 304,
                    }}
                  />
                </Space>

              </div>
              <div className="items-center flex-shrink-0  flex ml-20">
                {renderLogin()}
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden h-[300px]" id="mobile-menu">
              <div ref={ref} className="py-4 pb-3 space-y-1 sm:px-3 text-right">

                <MenuHeader className='ml-2 my-10'></MenuHeader>


                <NavLink
                  to="/tintuc"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-3 rounded-md text-sm font-medium"
                >
                  Tin Tức
                </NavLink>
                <NavLink
                  to="/lienhe"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-3 rounded-md text-sm font-medium"
                >
                  Liên Hệ
                </NavLink>
                {renderLoginResponsive()}
                <div className="md:hidden text-right my-5 py-2  ">
                  <Space direction="vertical" >
                    <Search
                      placeholder="Nhập khóa học muốn tìm"
                      allowClear
                      onSearch={onSearch}
                      style={{
                        width: 304,
                      }}
                    />
                  </Space>
                </div>


              </div>
            </div>
          )}
        </Transition>

      </nav>



    </div>
  )
}

export default Header

