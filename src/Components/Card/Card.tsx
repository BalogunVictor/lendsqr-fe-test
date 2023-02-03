import './card.scss'
import {HiUsers} from 'react-icons/hi'
import {FaUsers,FaCoins} from 'react-icons/fa'
import {BiCoinStack} from 'react-icons/bi'

export const CardList = () => {
  return (
    <div className='cardList'>
      <div className='cardListWrapper'>
      

        <div className='card'>
          <div className="cardWrapper">
            <div className="users">
              <FaUsers className='icon' size={20} />
              </div>
              <p className='text'>Users</p>
              <p className='number'>2453</p>
          </div>
        </div>

        <div className='card'>
          <div className="cardWrapper">
            <div className="activeUser">
              <BiCoinStack className='icon' size={20} />
              </div>
              <p className='text'>active Users</p>
              <p className='number'>2453</p>
          </div>
        </div>

        <div className='card'>
          <div className="cardWrapper">
            <div className="usersWithLoans">
            <FaCoins className='icon' size={20} />
            </div>
            <p className='text'>Users with loans</p>
            <p className='number'>12,453</p>
          </div>
        </div>

        <div className='card'>
          <div className="cardWrapper">
            <div className="usersWithSavings">
              <HiUsers className='icon' size={20} />
              </div>
              <p className='text'>Users with savings</p>
              <p className='number'>102,453</p>
          </div>
        </div>

      </div>

    </div>
  )
}
