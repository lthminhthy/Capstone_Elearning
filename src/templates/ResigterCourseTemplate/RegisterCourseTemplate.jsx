import React, { Fragment, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router';
import { USER_LOGIN } from '../../util/settings/config';

const RegisterCourseTemplate = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

    })
    if (!localStorage.getItem(USER_LOGIN)) {
        return <Navigate to='/dangnhap'></Navigate>
    }

    return (
        <Fragment>
            <Outlet></Outlet>
        </Fragment>
    )
}

export default RegisterCourseTemplate