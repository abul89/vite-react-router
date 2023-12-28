import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
import Sidebar from './Sidebar'
const Menu = ['Profile','Reviwes','logout']
function Header({OpenSidebar}) {
  return (
   <header className='header'>
    <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
    </div>
    <div className='header-left'>
        <BsSearch  className='icon'/>
    </div>
    <div className='header-right'>
        <BsFillBellFill  className='icon'/>
        <BsFillEnvelopeFill  className='icon'/>
        <BsPersonCircle  className='icon '/>
    </div>
     {/* <div className=''>
        <ul>
           {Menu.map((menu) => (
            
           <li key={menu}>{menu}</li>
           
           ))}
        </ul>
     </div> */}
   </header>
  )
}

export default Header