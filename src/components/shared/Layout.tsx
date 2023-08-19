import React, {FunctionComponent} from 'react'
import SideBar from './SiderBar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout:FunctionComponent = () => {
        return(
            <div className=' flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
                <SideBar />
                 <div className='flex-1'>
                    <Header/>
                    <div>{<Outlet/>}</div>
                 </div>
                
            </div>
        )
}

export default Layout;