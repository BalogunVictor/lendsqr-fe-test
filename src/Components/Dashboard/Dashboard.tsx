import { SideBar } from '../SideBar/SideNavBar'
import { TopNavBar } from '../TopNavBar/TopNavBar'
import './dashboard.scss'
import {useState} from 'react';
import { Main } from '../Main/Main';


const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };



  return (
    <>
    <div className="dashboard">
      <TopNavBar handleOpen={handleOpen} />
      <div className='dashboardWrapper'>
          <div className= {open ? "active" : 'sideBar' }>
          <SideBar />
          </div>
          <div className={open ? "activeMain" : 'main' }>
              <Main />
          </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard