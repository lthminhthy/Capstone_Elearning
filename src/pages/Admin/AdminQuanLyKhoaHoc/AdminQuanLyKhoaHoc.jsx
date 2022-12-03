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
    const [listUser, setListUser] = useState()
    const [taiKhoan, setTaiKhoan] = useState()
    const [xacThuc, setXacThuc] = useState()
    const [daGhiDanh, setDaGhiDanh] = useState()
    console.log("xacThuc: ", xacThuc);
    const [maKH, setMaKH] = useState()
    const data = danhSachKhoaHocDefault;




    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(layDanhSachKhoaHocAction())

    }, [])

    const onSearch = (value) => {
        console.log("valueS: ", value);
        dispatch(layDanhSachKhoaHocAction(value))
    };

    const changeUser = (e) => {
        console.log("e: ", e);
        setTaiKhoan(e)
        // e.target.value
    }
    const onClickXacThuc = (text) => {
        const objGhiDanh = {
            

            'maKhoaHoc': text
        }
        console.log('objGhiDanhtt', objGhiDanh)
        const thongTinXacThuc = {
            maKhoaHoc: maKH, taiKhoan: text
        }
        quanLyKhoaHocSerVice.ghiDanhKhoaHoc(thongTinXacThuc).then((result) => {
            console.log("result: ", result);
            alert('Đã xác thực cho ' + text + ' thành công!')
            // listXacThuc(objGhiDanh)
            

        }).catch((error) => {
            alert('Xác thực thất bại! ' + error.response?.data)
        })
        
    }
    const onClickHuyGhiDanh = (text) => {
        console.log('hihi')
        const thongTinHuy = {
           
            maKhoaHoc: maKH, taiKhoan: text
            
        } 
        console.log("thongTinHuy: ", thongTinHuy);
        quanLyKhoaHocSerVice.huyGhiDanh(thongTinHuy).then((result) => {
            console.log("result: ", result);
            alert('Đã hủy xác thực ' + text + ' thành công!')


        }).catch((error) => {
            alert('Hủy thất bại! ' + error.response?.data)
        })
        
    }

    const listDaGhiDanh = (objGhiDanh) => {
       
        quanLyNguoiDungService.layDanhSachHocVienKhoaHoc(objGhiDanh).then((result) => {
            setDaGhiDanh(result.data)
console.log('ttttt'+ result.data)

        }).catch((err) => {
            console.log("err: ", err);

        })
    }

    const listXacThuc = (objGhiDanh) => {
          quanLyNguoiDungService.layDanhSachHocVienChoXetDuyet(objGhiDanh).then((result) => {
            console.log("resultXT: ", result.data);
            setXacThuc(result.data)


        }).catch((err) => {
            console.log("err: ", err);

        })
    }
    const listGhiDanh = (objGhiDanh) => {
         quanLyNguoiDungService.layDanhSachNguoiDungChuaGhiDanh(objGhiDanh).then((result) => {
            setListUser(result.data)

        })
            .catch((error) => {
                console.log("errorGhiDanh: ", error);

            })
    }
 

    const modalGhiDanh = (text) => {
        console.log("text: ", text);
        setOpen(true)
        setMaKH(text)

        const objGhiDanh = {

            'maKhoaHoc': text
        }
        listGhiDanh(objGhiDanh)
        listXacThuc(objGhiDanh)
        listDaGhiDanh(objGhiDanh)

       

      
    }


    const columnsXacThuc = [


        {
            title: 'Tài khoản',
            dataIndex: 'taiKhoan',
            sorter: (a, b) => {
                let taiKhoanA = a.taiKhoan.toLowerCase().trim();
                let taiKhoanB = b.taiKhoan.toLowerCase().trim();
                if (taiKhoanA < taiKhoanB) {
                    return 1
                }
                return -1
            },
            width: "30%",
            sortDirections: ['descend', 'ascend'],

            onFilter: (value, record) => record.address.indexOf(value) === 0,
        },
        {
            title: 'Họ tên',
            dataIndex: 'hoTen',
            sorter: (a, b) => {
                let hoTenA = a.hoTen.toLowerCase().trim();
                let hoTenB = b.hoTen.toLowerCase().trim();
                if (hoTenA < hoTenB) {
                    return 1
                }
                return -1
            },
            width: "30%",
            sortDirections: ['descend', 'ascend'],

            onFilter: (value, record) => record.address.indexOf(value) === 0,
        },
       
        {
            title: 'Chờ xác nhận',
            dataIndex: '',
            render: (text, KH) => {
                console.log("textxeM: ", text);
                return <Fragment >
                    <div className=''>
                        <button className='ml-5 px-3 py-1 border border-retro-primary rounded-md hover:text-retro-beige hover:bg-retro-primary' onClick={() => {
                            onClickXacThuc(text.taiKhoan)
                        }}>Xác thực</button>
                        
                        <button className='ml-5 px-3 py-1 border border-retro-primary rounded-md hover:text-retro-beige hover:bg-retro-primary' onClick={() => {
                            onClickHuyGhiDanh(text.taiKhoan)
                        }}>Hủy</button>
                    </div>

                </Fragment>

            },
            width: '40%',
            sortDirections: ['descend', 'ascend'],

            onFilter: (value, record) => record.address.indexOf(value) === 0,
        },
    ];
    const columnsThamGia = [
        {
            title: 'Tài khoản',
            dataIndex: 'taiKhoan',
            sorter: (a, b) => {
                let taiKhoanA = a.taiKhoan.toLowerCase().trim();
                let taiKhoanB = b.taiKhoan.toLowerCase().trim();
                if (taiKhoanA < taiKhoanB) {
                    return 1
                }
                return -1
            },
            width: "30%",
            sortDirections: ['descend', 'ascend'],

            onFilter: (value, record) => record.address.indexOf(value) === 0,
        },
        {
            title: 'Họ tên',
            dataIndex: 'hoTen',
            sorter: (a, b) => {
                let hoTenA = a.hoTen.toLowerCase().trim();
                let hoTenB = b.hoTen.toLowerCase().trim();
                if (hoTenA < hoTenB) {
                    return 1
                }
                return -1
            },
            width: "30%",
            sortDirections: ['descend', 'ascend'],

            onFilter: (value, record) => record.address.indexOf(value) === 0,
        },
       
        {
            title: 'Chờ xác nhận',
            dataIndex: '',
            render: (text, KH) => {
                return <Fragment >
                    <div className=''>
                    <button className='ml-5 px-3 py-1 border border-retro-primary rounded-md hover:text-retro-beige hover:bg-retro-primary' onClick={() => {
                            onClickHuyGhiDanh(text.taiKhoan)
                        }}>Hủy</button>
                        
                    </div>

                </Fragment>

            },
            width: '40%',
            sortDirections: ['descend', 'ascend'],

            onFilter: (value, record) => record.address.indexOf(value) === 0,
        },



    ];
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
                        <button className='hover:bg-retro-primary bg-white border border-retro-primary text-retro-second hover:text-white px-1 py-1.5  rounded-md mr-3 font-semibold text-base' onClick={() => modalGhiDanh(text.maKhoaHoc)}>Ghi danh</button>
                        <Modal
                            title=""
                            centered
                            open={open}
                            onOk={() => setOpen(false)}
                            onCancel={() => setOpen(false)}
                            width={1000}
                            maskStyle={{ backgroundColor: 'transparent', opacity: '0.1', boxShadow: 'none' }}
                        >
                            <div className='popup'>
                                <p className='text-lg font-bold'>Chọn khóa học</p>
                                <div className='flex justify-start items-center'>
                                    <Select placeholder='Chọn họ tên người dùng' mode="" style={{ width: '50%' }} onChange={changeUser}>

                                        {listUser?.map((user, index) => {
                                            return <Select.Option key={index} value={user.taiKhoan}>{user.hoTen}</Select.Option>
                                        })}

                                    </Select>
                                    <button className='ml-5 px-3 py-1 border border-retro-primary rounded-md' onClick={() => {
                                        const thongTinDangKy = {
                                            maKhoaHoc: text.maKhoaHoc, taiKhoan: taiKhoan
                                        }
                                        quanLyKhoaHocSerVice.dangKyKhoaHoc(thongTinDangKy).then((result) => {
                                            alert('Đã ghi danh cho ' + taiKhoan + ' thành công!')

                                        }).catch((error) => {
                                            alert('Đăng ký thất bại! ' + error.response?.data)
                                        })
                                    }}>Ghi danh</button>
                                </div>
                                <hr className='my-5' />

                                <p className='text-lg font-bold'>Học viên chờ xác thực</p>
                                <Table className='mt-5 px-16' dataSource={xacThuc} columns={columnsXacThuc} onChange={onChange} rowKey={"taiKhoan"}></Table>
                                <hr className='my-5' />
                                <p className='text-lg font-bold'>Học viên đã tham gia khóa học</p>
                                <Table className='mt-5 px-16 ' dataSource={daGhiDanh} columns={columnsThamGia} onChange={onChange} rowKey={"taiKhoan"}></Table>

                            </div>



                        </Modal>




                        <NavLink to={`/admin/quanlynguoidung/capnhat/${danhSachKhoaHocDefault.indexOf(KH)}`} className='hover:bg-yellow-500 bg-white border border-yellow-500 text-yellow-500 hover:text-white px-3 py-1.5  rounded-md mr-3 font-bold text-lg'><EditOutlined></EditOutlined></NavLink>

                        <span style={{ cursor: 'pointer' }} className='hover:bg-red-500  border border-red-500 text-red-500 hover:text-white px-3 py-1.5 rounded-md mr-3 font-bold text-lg' onClick={() => {
                            if (window.confirm('Bạn có chắc muốn xóa khóa học ' + KH.tenKhoaHoc + ' không?')) {
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

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    const navigate = useNavigate()


    return (
        <div className='container'>
            <h2 className='lg:text-lg text-base mb-5'>Quản Lý Khóa Học </h2>
            <div className='flex justify-between items-center'>
                <Space direction="vertical" className='w-screen'>

                    <Search placeholder="Nhập tên khóa học cần tìm" enterButton allowClear size="large" onSearch={onSearch} />

                </Space>
                <Button className='w-48' type="primary" shape="round" size="large" onClick={() => {
                    navigate('/admin/quanlykhoahoc/themkhoahoc')
                }} >
                    Thêm Khóa Học
                </Button>
            </div>

            <Table className='mt-5' dataSource={data} columns={columns} onChange={onChange} rowKey={"taiKhoan"}></Table>



        </div>
    )
}

export default AdminQuanLyKhoaHoc