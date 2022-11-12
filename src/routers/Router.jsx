import { Navigate, useRoutes } from "react-router-dom"
import DangKy from "../pages/DangKy/DangKy"
import DangNhap from "../pages/DangNhap/DangNhap"
import Detail from "../pages/Detail/Detail"
import Home from "../pages/Home/Home"
import KetQuaTimKiem from "../pages/KetQuaTimKiem/KetQuaTimKiem"
import NotFind from "../pages/KetQuaTimKiem/NotFind"
import KhoaHoc from "../pages/KhoaHoc/KhoaHoc"
import KhoaHocTheoDanhMuc from "../pages/KhoaHocTheoDanhMuc/KhoaHocTheoDanhMuc"
import MainTemplate from "../templates/MainTemplate/MainTemplate"

export const Router = () => {
    const routing = useRoutes([
        {
            path : '/',
            element:<MainTemplate></MainTemplate>,
            children: [
                {
                    path:'/',
                    element: <Navigate to= 'home'></Navigate>
                },
                {
                    path:'home',
                    element: <Home></Home>,
                },
                {
                    path:'DanhMucKhoaHoc/:madanhmuc',
                    element: <KhoaHocTheoDanhMuc></KhoaHocTheoDanhMuc>,
                },
                {
                    path:'ketquatimkiem',
                    element: <KetQuaTimKiem></KetQuaTimKiem>,
                },
                {
                    path:'notfind',
                    element: <NotFind></NotFind>,
                },
                {
                    path:'khoahoc',
                    element: <KhoaHoc></KhoaHoc>,
                },
                {
                    path:'chitiet/:makhoahoc',
                    element: <Detail></Detail>,
                }
            ]

        },
        {
            path:'/dangnhap',
            element:<DangNhap></DangNhap>
        },
        {
            path:'/dangky',
            element:<DangKy></DangKy>
        }
        

    ])
    return routing
}
export default Router