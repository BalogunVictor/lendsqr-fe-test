import './SideBar.scss'
import {MdOutlineKeyboardArrowDown,} from 'react-icons/md'
import {FaToolbox,FaHome,} from 'react-icons/fa'
import { SettingList } from '../NavList/Setting-List'
import { settings, businesses, customers  } from '../../Data'
import { BusinessList } from '../NavList/Bussiness-List'
import { CustomerList } from '../NavList/Customer-List'


export const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>

        <div className="sideHeader"> 
            <ul className='sidebarList'>
              <li className='sidebarListItem'>
                <FaToolbox className='sidebarIcon'/>
                  <span className='sidebarListItemText'>Switch Organization</span>
                <MdOutlineKeyboardArrowDown className='sidebarIcon'/>
              </li>
            </ul>
        </div>

        <div className="sideHeader">
            <ul 
              className='sidebarList'>
              <li className='sidebarListItem'>
                <FaHome className='sidebarIcon'/>
                <span className='sidebarListItemText'>dashboard</span>
              </li>
            </ul>
        </div>
        
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
    </div>
  )
}
