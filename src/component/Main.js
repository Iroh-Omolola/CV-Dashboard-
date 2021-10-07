import React from 'react'
import MobileSidebar from './layout/mobileSidebar'
import Sidebar from './layout/Sidebar'
import MiniRoute from './Route'

const Main = ({isShow}) => {
    return (
        
            <div className='sub-body'>
            <Sidebar accountType="supervisor"/>
            <MobileSidebar accountType="supervisor" isShow={isShow}/>
             <MiniRoute/>
            </div>
           
    )
}

export default Main
