import React from 'react';
import './topbar.css'
import {IoIosNotificationsOutline} from 'react-icons/io';
import {MdLanguage} from 'react-icons/md';
import {FiSettings} from 'react-icons/fi';
import img1 from '../../images/avatar.png';
const Topbar = () => {
    return (
        <div className='topbar'>
             
             <div className='topbarWrapper'>
             <div className='topLeft'> 
             <span className='logo'>Tuniflix</span>
        </div>
        <div className='topRight'>
        <div className='topIconContainer'>
           <IoIosNotificationsOutline />
           <span className='topIconBadge'> 2</span>
           </div>
           <div className='topIconContainer'>
           <MdLanguage />
           <span className='topIconBadge'> 2</span>
           </div>
           <div className='topIconContainer'>
            <FiSettings />
           </div>
           <img src={img1}   className='topAvatar' />
            </div>
            </div>
        </div>
    );
}

export default Topbar;
