import { SideBar } from '../SideBar/SideNavBar'
import { TopNavBar } from '../TopNavBar/TopNavBar'
import './dashboard.scss'
import {useState} from 'react';
import axios from 'axios'
import { Main } from '../Main/Main';


const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users').then((response) => {
    console.log(response.data);
});

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