import { CardList } from '../Card/Card'
import { Table } from '../Table/Table'
import './main.scss'

export const Main = () => {
  return (
    <div className='main'>
      <div className="mainWrapper">
      <div className='header'>
        <h1>Users</h1>
      </div>
      <div className='mainWrapper'>
        <CardList />
        <div className='table'> 
          <div className="tableWrapper"> 
          <Table />
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}
