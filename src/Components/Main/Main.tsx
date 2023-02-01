import { CardList } from '../Card/Card'
// import {SlOptionsVertical} from 'react-icons/sl'
import './main.scss'
import {BsArrowRightCircle } from 'react-icons/bs'
// import { FaHome } from 'react-icons/fa'
type handleOpenProps = {
  handleOpen: () => void
}


export const Main = (props: handleOpenProps ) => {
  return (
    <div className='main'>
      <div className='header'>
        <BsArrowRightCircle 
          onClick= { () => props.handleOpen}
          size={25}
          className='navIcon'
         />
        <h1>Users</h1>
        </div>
      <div className='mainWrapper'>
        <CardList />
        
        {/* <div className='table'> 
          <div className="tableWrapper"> */}
            {/* /////////////// Header//////////////////// */}
            {/* <div className="tableHeader">
                <li className='titleItem'>
                  <span className='titleItemText'>organization</span>
                  <FaHome className='titleIcon'/>
                </li>

                <li className='titleItem'>
                  <span className='titleItemText'>username</span>
                  <FaHome className='titleIcon'/>
                </li>

                <li className='titleItem'>
                  <span className='titleItemText'>email</span>
                  <FaHome className='titleIcon'/>
                </li>

                <li className='titleItem'>
                  <span className='titleItemText'>phone number</span>
                  <FaHome className='titleIcon'/>
                </li>

                <li className='titleItem'>
                  <span className='titleItemText'>dated joined</span>
                  <FaHome className='titleIcon'/>
                </li>

                <li className='titleItem'>
                  <span className='titleItemText'>status</span>
                  <FaHome className='titleIcon'/>
                </li>
          </div> */}
              {/* /////////////// Body//////////////////// */}
          {/* <div className="tableBody">
              <span className='bodyItem'>Lendsqr</span>
              <span className='bodyItem'>Adedeji</span>     
              <span className='bodyItem'>adedeji@lendsqr.com</span>
              <span className='bodyItem'>08078903721</span>
              <span className='bodyItem'>May 15, 2020 10:00 AM</span>
              <div className="status">
                <span >active</span>
              </div>
              <span className='bodyItem'><SlOptionsVertical/></span>
            </div>
              <hr className='line' />

              <div className="tableBody">
              <span className='bodyItem'>Lendsqr</span>
              <span className='bodyItem'>Adedeji</span>     
              <span className='bodyItem'>adedeji@lendsqr.com</span>
              <span className='bodyItem'>08078903721</span>
              <span className='bodyItem'>May 15, 2020 10:00 AM</span>
              <div className="status">
                <span >Inactive</span>
              </div>
              <span className='bodyItem'><SlOptionsVertical/></span>
            </div>
          <hr className='line' />
           
          
         
        </div>
          </div> */}
      </div>
    </div>
  )
}
