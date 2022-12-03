import { Table } from 'antd';
import React, { Fragment, useState } from 'react';

import { Input, Space } from 'antd';
import { Button, Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';
import { EditOutlined, DeleteOutlined, CalendarOutlined } from '@ant-design/icons';
import { GROUPID } from '../../../util/settings/config';
import { timKiemNguoiDungTheoTenAction } from '../../../redux/actions/QuanLyNguoiDungAction';
import { quanLyNguoiDungService } from '../../../services/QuanLyNguoiDungService';


const { Search } = Input;

const AdminQuanLyNguoiDung = () => {

    const { danhSachNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);
    console.log("danhSachNguoiDung: ", danhSachNguoiDung);
  
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(timKiemNguoiDungTheoTenAction())
  
    }, [])
  
    const onSearch = (value) => {
      console.log("valueS: ", value);
      dispatch(timKiemNguoiDungTheoTenAction(value))
    };
  
    const columns = [
     
      {
        title: 'Tài khoản',
        dataIndex: 'taiKhoan',
        value: (text, object) => { return <span>{text}</span> },
  
  
        sorter: (a, b) => {
          let taiKhoanA = a.taiKhoan.toLowerCase().trim();
          let taiKhoanB = b.taiKhoan.toLowerCase().trim();
          if (taiKhoanA < taiKhoanB) {
            return 1
          }
          return -1
        },
        sortDirections: ['descend', 'ascend'],
        width: "15%"
      },
  
      {
        title: 'Mật khẩu',
        dataIndex: 'matKhau',
        sorter: (a, b) => {
          let matKhauA = a.matKhau.toLowerCase().trim();
          let matKhauB = b.matKhau.toLowerCase().trim();
          if (matKhauA < matKhauB) {
            return 1
          }
          return -1
        },
        width: "15%",
        sortDirections: ['descend', 'ascend'],
  
        onFilter: (value, record) => record.address.indexOf(value) === 0,
      },
      {
        title: 'Họ tên',
        dataIndex: 'hoTen',
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => {
          let hoTenA = a.hoTen.toLowerCase().trim();
          let hoTenB = b.hoTen.toLowerCase().trim();
          if (hoTenA < hoTenB) {
            return 1
          }
          return -1
        },
        sortDirections: ['descend'],
        render: (text, user) => {
          return <Fragment>
            {user.hoTen?.length > 50 ? user.hoTen?.substring(0, 50) + '...' : user.hoTen}
          </Fragment>
  
        },
        width: '15%',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        render: (text, user) => {
          return <Fragment>
            {user.email?.length > 50 ? user.email?.substring(0, 50) + '...' : user.email}
          </Fragment>
  
        },
        width: '10%',
      },
      {
        title: 'Số điện thoại',
        dataIndex: 'soDt',
        sorter: (soDTA, soDTB) => soDTA.soDt - soDTB.soDt,
        render: (text, user) => {
          return <Fragment>
            {user.soDt?.length > 50 ? user.soDt?.substring(0, 50) + '...' : user.soDt}
          </Fragment>
  
        },
        width: '15%',
        sortDirections: ['descend', 'ascend'],
  
        onFilter: (value, record) => record.address.indexOf(value) === 0,
      },
      {
        title: 'Loại Người Dùng',
        dataIndex: 'maLoaiNguoiDung',
        width: '10%',
        sortDirections: ['descend', 'ascend'],
  
      },
      {
        title: 'Hành Động',
        dataIndex: '',
        render: (text, user) => {
          return <Fragment >
            <div className='text-center'>
            <button className='hover:bg-retro-primary bg-white border border-retro-primary text-retro-second hover:text-white px-1 py-1.5  rounded-md mr-3 font-semibold text-base'>Ghi danh</button>
              <NavLink to={`/admin/quanlynguoidung/capnhat/${danhSachNguoiDung.indexOf(user)}`} className='hover:bg-yellow-500 bg-white border border-yellow-500 text-yellow-500 hover:text-white px-3 py-1.5  rounded-md mr-3 font-bold text-lg'><EditOutlined></EditOutlined></NavLink>

              <span style={{ cursor: 'pointer' }} className='hover:bg-red-500  border border-red-500 text-red-500 hover:text-white px-3 py-1.5 rounded-md mr-3 font-bold text-lg' onClick={() => {
                if (window.confirm('Bạn có chắc muốn xóa người dùng ' + user.taiKhoan + ' không?')) {
                    quanLyNguoiDungService.xoaNguoiDung(user.taiKhoan).then((result) => {
                        console.log("result: ", result);
                        alert('Đã xóa người dùng thành công!')
                        dispatch(timKiemNguoiDungTheoTenAction())


                    }).catch((error) => {
                        console.log("error: ", error);
                        alert('Thất bại! ' + '' +  error.response?.data)

                    })
                
                }
  
              }}><DeleteOutlined /></span>
  
            </div>
  
          </Fragment>
  
        },
        width: '20%',
        sortDirections: ['descend', 'ascend'],
  
        onFilter: (value, record) => record.address.indexOf(value) === 0,
      },
    ];
    const data = danhSachNguoiDung;
    const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };
    const navigate = useNavigate()   


    return (
        <div className='container'>
            <h2 className='lg:text-lg text-base mb-5'>Quản Lý Người Dùng</h2>
            <div className='flex justify-between items-center'>
                <Space direction="vertical" className='w-screen'>

                    <Search placeholder="Nhập họ tên hoặc tài khoản người dùng cần tìm" enterButton allowClear size="large" onSearch={onSearch} />

                </Space>
                <Button className='w-48' type="primary" shape="round" size="large" onClick={() => {
                    navigate('/admin/quanlynguoidung/themnguoidung')
                }} >
                    Thêm người dùng
                </Button>
            </div>

            <Table className='mt-5' dataSource={data} columns={columns} onChange={onChange} rowKey={"taiKhoan"}></Table>



        </div>
    )
}

export default AdminQuanLyNguoiDung