import { Main } from '../Main/Main'
import { SideBar } from '../SideBar/SideNavBar'
import { TopNavBar } from '../TopNavBar/TopNavBar'
import './dashboard.scss'

const Dashboard = () => {
  return (
    <>
    <div className="dashboard">
      <TopNavBar />
      <div className='dashboardWrapper'>
        <div className="sideBar">
          <SideBar />
        </div>
        <div className='main'>
          <Main />
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard