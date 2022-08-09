import React from 'react';
import "./sidebar.css";
import {MdLineStyle,MdTimeline,MdTrendingUp,MdStorefront,MdDynamicFeed,MdOutlineMessage,MdOutlineManageAccounts,MdOutlineReportProblem} from 'react-icons/md';
import {AiOutlineUser,AiOutlineTransaction,AiOutlineMail} from 'react-icons/ai';
import{ImStatsBars} from 'react-icons/im';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Dashboard</h3>
                <ul className='sidebarList'>
                <li className='sidebarListItem active'>
                    <MdLineStyle className='sidebarIcon' /> Home
                    </li>
                    <li className='sidebarListItem'>
                    <MdTimeline className='sidebarIcon'/> Analytics
                    </li>
                    <li className='sidebarListItem'>
                    <MdTrendingUp className='sidebarIcon' /> Sales
                    </li>
                </ul>
            </div>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'> Quick Menu</h3>
                 
                <ul className='sidebarList'>
                <li className='sidebarListItem active'>
                    <AiOutlineUser className='sidebarIcon' /> Users
                    </li>
                    <li className='sidebarListItem'>
                    <MdStorefront className='sidebarIcon'/> Products
                    </li>
                    
                    <li className='sidebarListItem'>
                    <AiOutlineTransaction className='sidebarIcon' /> Transactions 
                    </li>
                    <li className='sidebarListItem'>
                    <ImStatsBars className='sidebarIcon' /> Reports
                    </li>
                </ul>
            </div>
             
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <AiOutlineMail className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <MdDynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <MdOutlineMessage className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MdOutlineManageAccounts className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <MdTimeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <MdOutlineReportProblem className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
)};

export default Sidebar;

