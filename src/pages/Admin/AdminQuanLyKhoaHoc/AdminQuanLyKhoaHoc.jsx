
import { Modal, Select, Table } from 'antd';
import React, { Fragment, useState } from 'react';

import { Input, Space } from 'antd';
import { Button, Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';
import { EditOutlined, DeleteOutlined, CalendarOutlined } from '@ant-design/icons';
import { timKiemNguoiDungTheoTenAction } from '../../../redux/actions/QuanLyNguoiDungAction';
import { quanLyNguoiDungService } from '../../../services/QuanLyNguoiDungService';
import { layDanhSachKhoaHocAction } from '../../../redux/actions/QuanLyKhoaHocAction';
import { quanLyKhoaHocSerVice } from '../../../services/QuanLyKhoaHocService';


const { Search } = Input;

const AdminQuanLyKhoaHoc = () => {


    const { danhSachKhoaHocDefault } = useSelector(state => state.QuanLyKhoaHocReducer);
    console.log("danhSachKhoaHocDefault: ", danhSachKhoaHocDefault);
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(layDanhSachKhoaHocAction())

    }, [])

    const onSearch = (value) => {
        console.log("valueS: ", value);
        dispatch(layDanhSachKhoaHocAction(value))
    };


    const columns = [

        {
            title: 'Mã khóa học',
            dataIndex: 'maKhoaHoc',
            value: (text, object) => { return <span>{text}</span> },


            sorter: (a, b) => {
                let maKhoaHocA = a.maKhoaHoc.toLowerCase().trim();
                let maKhoaHocB = b.maKhoaHoc.toLowerCase().trim();
                if (maKhoaHocA < maKhoaHocB) {
                    return 1
                }
                return -1
            },
            sortDirections: ['descend', 'ascend'],
            width: "15%"
        },

        {
            title: 'Tên khóa học',
            dataIndex: 'tenKhoaHoc',
            sorter: (a, b) => {
                let tenKhoaHocA = a.tenKhoaHoc.toLowerCase().trim();
                let tenKhoaHocB = b.tenKhoaHoc.toLowerCase().trim();
                if (tenKhoaHocA < tenKhoaHocB) {
                    return 1
                }
                return -1
            },
            width: "15%",
            sortDirections: ['descend', 'ascend'],

            onFilter: (value, record) => record.address.indexOf(value) === 0,
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'hinhAnh',
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            render: (text, kh) => {
                return <Fragment>
                    <img width={100} src={kh.hinhAnh} alt="" />
                </Fragment>

            },
            width: '15%',
        },
        {
            title: 'Lượt xem',
            dataIndex: 'luotXem',
            sorter: (a, b) => {
                let luotXemA = a.luotXem;
                let luotXemB = b.luotXem;
                if (luotXemA < luotXemB) {
                    return 1
                }
                return -1
            },
            width: "10%",
            sortDirections: ['descend', 'ascend'],

            onFilter: (value, record) => record.address.indexOf(value) === 0,
        },
        {

            title: 'Người tạo',
            dataIndex: 'nguoiTao',
            render: (nguoiTao) => {
                return <Fragment>
                    {nguoiTao.taiKhoan}
                </Fragment>

            },
            width: "15%",

            onFilter: (value, record) => record.address.indexOf(value) === 0,
        },

        {
            title: 'Thao tác',
            dataIndex: '',
            render: (text, KH) => {
                return <Fragment >
                    <div className='text-center'>
                        <button className='hover:bg-retro-primary bg-white border border-retro-primary text-retro-second hover:text-white px-1 py-1.5  rounded-md mr-3 font-semibold text-base' onClick={() => setOpen(true)}>Ghi danh</button>
                        <Modal
                            title="Modal 1000px width"
                            centered
                            open={open}
                            onOk={() => setOpen(false)}
                            onCancel={() => setOpen(false)}
                            width={1000}
                            maskStyle={{ backgroundColor: 'transparent', opacity: '0.1', boxShadow: 'none' }}
                        >
                            <p>Chọn khóa học</p>
                            <Select mode="multiple" style={{ width: '50%' }}>
                                <Select.Option value="jack">Jack</Select.Option>
                                <Select.Option value="lucy">Lucy</Select.Option>
                                <Select.Option value="Yiminghe">yiminghe</Select.Option>
                            </Select>


                        </Modal>




                        <NavLink to={`/admin/quanlynguoidung/capnhat/${danhSachKhoaHocDefault.indexOf(KH)}`} className='hover:bg-yellow-500 bg-white border border-yellow-500 text-yellow-500 hover:text-white px-3 py-1.5  rounded-md mr-3 font-bold text-lg'><EditOutlined></EditOutlined></NavLink>

                        <span style={{ cursor: 'pointer' }} className='hover:bg-red-500  border border-red-500 text-red-500 hover:text-white px-3 py-1.5 rounded-md mr-3 font-bold text-lg' onClick={() => {
                            if (window.confirm('Bạn có chắc muốn xóa khóa học ' + KH.taiKhoan + ' không?')) {
                                quanLyKhoaHocSerVice.xoaKhoaHoc(KH.maKhoaHoc).then((result) => {
                                    console.log("result: ", result);
                                    alert('Đã xóa khoá học thành công!')
                                    dispatch(layDanhSachKhoaHocAction())

                                }).catch((error) => {
                                    console.log("error: ", error);
                                    alert('Thất bại! ' + '' + error.response?.data)

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
    const data = danhSachKhoaHocDefault
    ;
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    const navigate = useNavigate()


    return (
        <div className='container'>
            <h2 className='lg:text-lg text-base mb-5'>Quản Lý Khóa Học</h2>
            <div className='flex justify-between items-center'>
                <Space direction="vertical" className='w-screen'>

                    <Search placeholder="Nhập tên khóa học cần tìm" enterButton allowClear size="large" onSearch={onSearch} />

                </Space>
                <Button className='w-48' type="primary" shape="round" size="large" onClick={() => {
                    navigate('/admin/quanlykhoahoc/themkhoahoc')
                }} >
                    Thêm khóa học
                </Button>
            </div>

            <Table className='mt-5' dataSource={data} columns={columns} onChange={onChange} rowKey={"taiKhoan"}></Table>



        </div>
    )
}

export default AdminQuanLyKhoaHoc