import { CardList } from '../Card/Card'
import './main.scss'

export const Main = () => {
  return (
    <div className='main'>
      <h1 className='header'>Users</h1>
      <div className='mainWrapper'>
        <CardList />
        <div className="table">
          <div>
            <span className='title'>organization</span>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
          </div>
          <div>
          <span className='title'>username</span>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
          </div>
          <div>Email</div>
          <div>Phone number</div>
          <div>Date joined</div>
          <div>Status</div>
        </div>
      </div>
    </div>
  )
}
