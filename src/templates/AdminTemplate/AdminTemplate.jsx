
import {
    UserOutlined,
    FolderOutlined,
    FileAddOutlined,
    UserAddOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router';
import { USER_LOGIN } from '../../util/settings/config';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SubMenu from 'antd/lib/menu/SubMenu';
import './AdminTemplate.css'





const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, items) {
    return {
        key,
        icon,
        items,
        label,
    };
}




const AdminTemplate = () => {

    const [collapsed, setCollapsed] = useState(false);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })

    const navigate = useNavigate()
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
    if (!localStorage.getItem(USER_LOGIN)) {
        alert('Bạn không có quyền truy cập vào trang này, hãy thử đăng nhập bằng tài khoản admin.')
        return navigate('/')
    }
    if (userLogin.maLoaiNguoiDung !== 'GV') {
        alert('Bạn không có quyền truy cập vào trang này, hãy thử đăng nhập bằng tài khoản admin.')
        return navigate('/')

    }
  
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >

            <Sider className='asider' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo" />
                <NavLink to='/'>
                    <img className='p-3 w-auto' src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="logo" />
                </NavLink>

                <Menu theme="dark" mode="inline" >
                    <SubMenu key='sub11' icon={<FolderOutlined />} title="Quản Lý Khóa Học">
                        <Menu.Item key='122' icon={<UserOutlined />}>
                            <NavLink to='/admin/user'>Quản Lý Khóa Học</NavLink>
                        </Menu.Item>
                        <Menu.Item key='12' icon={<UserAddOutlined />}>
                            <NavLink to='/admin/user/adduser'>Quản Lý Khóa Học</NavLink>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key='sub12' icon={<FolderOutlined />} title="Quản Lý Người Dùng">
                        <Menu.Item key='132' icon={<FolderOutlined />}>
                            <NavLink to='/admin/quanlynguoidung'>Quản Lý Người Dùng</NavLink>

                        </Menu.Item>
                        <Menu.Item key='14' icon={<FileAddOutlined />}>
                            <NavLink to='/admin/quanlynguoidung/themnguoidung'>Thêm Người Dùng</NavLink>

                        </Menu.Item>
                    </SubMenu>



                </Menu>
            </Sider>

            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}

                >
                    <div className='text-right'>
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
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >

                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <Outlet></Outlet>
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    CyberSoft ©2022 by LTMT
                </Footer>
            </Layout>
        </Layout>
    )
}

export default AdminTemplate