import { Navigate, useRoutes } from "react-router-dom"
import Home from "../pages/Home/Home"
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
                }
            ]

        }
        

    ])
    return routing
}
export default Router