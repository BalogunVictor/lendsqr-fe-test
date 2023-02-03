import './SideBar.scss'
import {MdOutlineKeyboardArrowDown,} from 'react-icons/md'
import {FaToolbox,FaHome,} from 'react-icons/fa'
import {BsArrowLeftCircle} from 'react-icons/bs'
import { SettingList } from '../NavList/Setting-List'
import { settings, businesses, customers  } from '../../Data'
import { BusinessList } from '../NavList/Bussiness-List'
import { CustomerList } from '../NavList/Customer-List'

type handleOpenProps = {
  handleOpen: () => void
}

export const SideBar = (props:handleOpenProps) => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
            <ul 
            className='sidebarList'
            style={{paddingBottom:'25px'}}
            >
              <li className='sidebarListItem'>
                <FaToolbox className='sidebarIcon'/>
                  <span className='sidebarListItemText'>Switch Organization</span>
                <MdOutlineKeyboardArrowDown className='sidebarIcon'/>
              </li>
            </ul>

            <ul 
              className='sidebarList'
              style={{paddingBottom:'20px'}}
            >
              <li className='sidebarListItem'>
                <FaHome className='sidebarIcon'/>
                <span className='sidebarListItemText'>dashboard</span>
              </li>
            </ul>
        
            {/* //////////BRAKE/////////////*/}
                  <p>CUSTOMERS</p>
                  <CustomerList List={customers} /> 
            {/* //////////BRAKE/////////////*/}
                <p>BUSINESSES</p>
                <BusinessList List={businesses} /> 
            {/* //////////BRAKE/////////////*/} 
              <p>SERVICES</p>
                <SettingList List={settings} /> 
        </div>
        <div className="navIcon">
        <BsArrowLeftCircle
          onClick= {props.handleOpen}
          size={35}
          className='navIcon'
         />
      </div>
    </div>
  )
}
