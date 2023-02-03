import { Main } from '../Main/Main'
import { SideBar } from '../SideBar/SideNavBar'
import { TopNavBar } from '../TopNavBar/TopNavBar'
import './dashboard.scss'
import {useState} from 'react';

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
    <div className="dashboard">
      <TopNavBar />
      <div className='dashboardWrapper'>
          <div className= {open ? "active" : 'sideBar' }>
          <SideBar handleOpen={handleOpen}  />
          </div>
          
          <div className={open ? "activeMain" : 'main' }>
          <Main handleOpen={handleOpen} />
          </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard