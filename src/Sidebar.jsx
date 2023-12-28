import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck,BsLinkedin, BsMenuButtonWideFill, BsFillGearFill,BsInstagram,BsFacebook}
 from 'react-icons/bs'
 import { Link } from "react-router-dom";
function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
              <span>CRM with Social media</span>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
                <a href="/">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
           <Link to="/instagram"><BsInstagram className='icon'/> Instagram</Link>
     
            </li>
            <li className='sidebar-list-item'>
          
                <a href='/facebook'><BsFacebook className='icon'/> Facebook</a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/linkedin">
                    <BsLinkedin className='icon'/> Linkedin
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/">
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/">
                    <BsListCheck className='icon'/> Inventory
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar