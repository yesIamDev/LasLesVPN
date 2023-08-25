import React,{FunctionComponent} from 'react'
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

const Layout:FunctionComponent = () => {
    return(
        <div className='flex flex-row bg-gray-50 h-screen w-screen overflow-hidden'>
            <SideBar/>
            <div className='flex-1'>
                <div>{<Outlet/>}</div>
            </div>
        </div>
    )
}

export default Layout;