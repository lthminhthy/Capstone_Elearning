import React, { Fragment, useState } from 'react'
import { Transition } from "@headlessui/react";
import { Input, Space } from 'antd';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import MenuHeader from '../MenuHeader/MenuHeader';

// antd
const { Search } = Input;


const onSearch = (value) => console.log(value);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()


  // login/register
  const renderLogin = () => {
    // if (_.isEmpty(userLogin)) {
    return <Fragment>
      <button className="self-center px-8 py-3 rounded  hover:bg-retro-beige hover:text-retro-primary  text-retro-beige font-semibold " onClick={() => {
        navigate('/login')
      }}>Login</button>
      <button className="hover:bg-retro-beige hover:text-retro-primary  text-retro-beige self-center px-8 py-3 font-semibold rounded " onClick={() => {
        navigate('/register')
      }}>Register</button>
    </Fragment>
    // }
    // return <button onClick={() => {
    //   navigate("/profile")
    // }}>
    //   <div className='flex justify-center items-center mr-4'>
    //     <div className="overflow-hidden relative w-8 h-8 bg-black rounded-full dark:bg-gray-600">
    //       <svg className="absolute -left-1 w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>


    //     </div>
    //     <span className="ml-3 font-medium text-white dark:text-gray-300">{userLogin.taiKhoan}</span>
    //   </div>
    // </button>


  }


  return (
    <div>
      <nav className="bg-retro-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">


                  <MenuHeader></MenuHeader>


                </div>
              </div>
            </div>
            <div className=' items-center justify-between md:flex hidden'>
              <div className="relative mx-auto text-retro-primary ">
                <input className="border-2 w-64 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Nhập khóa học muốn tìm kiếm" />
                <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                  <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style={{ enableBackground: 'new 0 0 56.966 56.966' }} xmlSpace="preserve" width="512px" height="512px">
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </button>
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
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-right">
                {/* <a
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Danh mục khóa học
                </a> */}
                <MenuHeader className='ml-2'></MenuHeader>


                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Register
                </a>
                <div className="md:hidden text-right my-5  ">
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

