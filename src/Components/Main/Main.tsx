import { CardList } from '../Card/Card'
import './main.scss'
import {BsArrowRightCircle } from 'react-icons/bs'
import { FaHome } from 'react-icons/fa'
import { Table } from '../Table/Table'





export const Main = () => {
  return (
    <div className='main'>
      <div className='header'>
        <h1>Users</h1>
      </div>
      <div className='mainWrapper'>
        <CardList />
        
        <div className='table'> 
          <div className="tableWrapper"> 
            <Table />  
            {/* <Main /> */}
          </div>
        </div>

      </div>
    </div>
  )
}
