import './SideBar.scss'
import {FaToolbox} from 'react-icons/fa'
import {MdOutlineKeyboardArrowDown, MdPeople} from 'react-icons/md'
import {FaHome} from 'react-icons/fa'

export const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>

            <ul className='sidebarList'>
              <li className='sidebarListItem'>
                <FaToolbox className='sidebarIcon'/>
                <span className='sidebarListItemText'>Switch Organization</span>
                <MdOutlineKeyboardArrowDown className='sidebarIcon'/>
              </li>
            </ul>
        
            <ul className='sidebarList'>
              <li className='sidebarListItem'>
                <FaHome className='sidebarIcon'/>
                <span className='sidebarListItemText'>dashboard</span>
              </li>
            </ul>
        

            <p>customers</p>

            <ul className='sidebarList'>
              <li className='sidebarListItem'>
                <MdPeople className='sidebarIcon'/>
                <span className='sidebarListItemText'>Users</span>
              </li>
            </ul>

            <ul className='sidebarList'>
              <li className='sidebarListItem'>
                <MdPeople className='sidebarIcon'/>
                <span className='sidebarListItemText'>Users</span>
              </li>
            </ul>

            <ul className='sidebarList'>
              <li className='sidebarListItem'>
                <MdPeople className='sidebarIcon'/>
                <span className='sidebarListItemText'>Users</span>
              </li>
            </ul>

            <p>Businesses</p>

            <ul className='sidebarList'>
              <li className='sidebarListItem'>
                <MdPeople className='sidebarIcon'/>
                <span className='sidebarListItemText'>Users</span>
              </li>
            </ul>

            <ul className='sidebarList'>
              <li className='sidebarListItem'>
                <MdPeople className='sidebarIcon'/>
                <span className='sidebarListItemText'>Users</span>
              </li>
            </ul>

            <ul className='sidebarList'>
              <li className='sidebarListItem'>
                <MdPeople className='sidebarIcon'/>
                <span className='sidebarListItemText'>Users</span>
              </li>
            </ul>

      
        </div>
      </div>
  )
}
