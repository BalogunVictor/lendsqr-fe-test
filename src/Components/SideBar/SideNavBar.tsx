import './SideBar.scss'
import {MdOutlineKeyboardArrowDown,} from 'react-icons/md'
import {FiDivideCircle} from 'react-icons/fi'
import {
  FaToolbox,
  FaHome,
  FaUsers,
  FaRegHandshake,
  FaPiggyBank,
  FaHandHoldingUsd,
  FaCoins,
  FaFan,
  FaChartBar,
} from 'react-icons/fa'
import {
  BsFillPersonCheckFill,
  BsFillPersonXFill,
  BsBank,
  BsArrowLeftCircle
 } from 'react-icons/bs'
import {HiUsers} from 'react-icons/hi'
import {RiUserSettingsFill,RiFilePaper2Line} from 'react-icons/ri'
import { IoIosOptions } from 'react-icons/io'
// import { Navlist } from '../NavList/Navlist'
// import { settings } from '../../Data'

type handleOpenProps = {
  handleOpen: () => void
}

export const SideBar = (props:handleOpenProps) => {

  const customers = [
      {
        logo: <HiUsers />,
        name: "Users",
      },
      {
        logo: <FaUsers />,
        name: "Guarantors",
      },
      {
        logo: "/",
        name: "Loans",
      },
      {
        logo: <FaRegHandshake />,
        name: "Decision Models",
      },
      {
        logo: <FaPiggyBank />,
        name: "Savings",
      },
      {
        logo:  <FaHandHoldingUsd />,
        name: "Loan Requests",
      },
      {
    
        logo: <BsFillPersonCheckFill/>,
        name: "Whitelist",
      },
      {
        logo: <BsFillPersonXFill />,
        name: "Karma",
      },
    ]
    const businesses = [

        {
          logo: <FaToolbox />,
          name: "Organization",
        },
        {
          logo: <FaHandHoldingUsd />,
          name: "Loan Products",
        },
        {
          logo: <BsBank />,
          name: "Savings Products",
        },
        {
          logo: <FaCoins />,
          name: "Fees and Charges",
        },
        {
          logo: "/",
          name: "Transactions",
        },
        {
          logo: <FaFan />,
          name: "Services",
        },
        {
          logo: <RiUserSettingsFill />,
          name: "Service Account",
        },
        {
          logo: <RiFilePaper2Line />,
          name: "Settlements",
        },
        {
          logo: <FaChartBar />,
          name: "Reports",
        },
      ]


  const settings = [
      {
        logo: <IoIosOptions/>,
        name: "Preferences",
      },
      {
        logo: '/',
        name: "Fees and Pricing",
      },
      {
        logo: <FiDivideCircle />,
        name: "Audit Logs",
      },
    ]

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
        
{/* ///////////////////////////////////BRAKE///////////////////////////////////////  */}
            <p>customers</p>

            {customers.map((item, index, arr) => {
            return (

            <ul key={index} className='sidebarList'>
              <li className='sidebarListItem'>
                <div className='sidebarIcon'>{item.logo}</div>
                <span className='sidebarListItemText'>{item.name}</span>
              </li>
            </ul> 
            )
        })}
{/* ///////////////////////////////////BRAKE///////////////////////////////////////  */}
            <p>Businesses</p>
  
            {businesses.map((item, index) => {
            return (

            <ul key={index} className='sidebarList'>
              <li className='sidebarListItem'>
                <div className='sidebarIcon'>{item.logo}</div>
                <span className='sidebarListItemText'>{item.name}</span>
              </li>
            </ul> 
            )
        })}
{/* ///////////////////////////////////BRAKE///////////////////////////////////////  */}
      <p>settings</p>

        {settings.map((item, index, arr) => {
            return (

            <ul key={index} className='sidebarList'>
              <li className='sidebarListItem'>
                <div className='sidebarIcon'>{item.logo}</div>
                <span className='sidebarListItemText'>{item.name}</span>
              </li>
            </ul> 
            )
        })}

             {/* {settings.map((setting) => (
               <Navlist key={setting.id} List={setting} />
              ))} */}  
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
