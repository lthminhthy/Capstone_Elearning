import { Fragment, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useDispatch, useSelector } from 'react-redux'
import { layDanhMucKhoaHocAction } from '../../redux/actions/QuanLyKhoaHocAction'
import { NavLink } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MenuHeader() {

    const dispatch = useDispatch()
    const {danhMucKhoaHoc} = useSelector(state => state.QuanLyKhoaHocReducer)

    useEffect(() => {
        dispatch(layDanhMucKhoaHocAction())
    },[])

    // const convertSelectKhoaHoc = () => {
    //     return danhMucKhoaHoc?.map((khoaHoc, index) => {
    //       return { label: khoaHoc.tenDanhMuc, value: khoaHoc.maDanhMuc }
    //     })
    
    //   }


  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-retro-beige bg-retro-beige px-4 py-2 text-sm font-medium text-retro-beige shadow-sm focus:outline-none focus:ring-2 focus:ring-retro-primary focus:ring-offset-2 focus:ring-offset-retro-primary focus:text-retro-beige ">
          Danh Mục Khóa Học
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-30 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
           <div className="py-1"> 
           {
                danhMucKhoaHoc?.map((course, index) => {
                    return <Menu.Item key={index}>
                    {({ active }) => (
                      <NavLink
                        to={`/DanhMucKhoaHoc/${course.maDanhMuc}`}
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        {course.tenDanhMuc}
                      </NavLink>
                    )}
                  </Menu.Item>
                })
            }
            </div>



          
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
