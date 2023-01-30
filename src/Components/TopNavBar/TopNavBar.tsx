import './Topnavbar.scss'
import {AiOutlineSearch} from 'react-icons/ai'

export const TopNavBar = () => {
  return (
    <div className='navBar'>
      <div className='navBarWrapper'>

      <div className="logoContainer">
        <img className='logoIcon' src="/asset/Union.png" alt="logo" />
        <img className='logoText' src="/asset/lendsqr.png" alt="logo" />
      </div>

      <div className='search'>
        <form>
          <input type="text" placeholder='search for anything' />
          <button>
            <AiOutlineSearch />
          {/* <img src="/asset/topnav/search.png" alt="" /> */}
          </button>
        </form>
      </div>

      <div className='links'>
        <div className="doc">
          <p>docs</p>
        </div>
        <div className='alarm'>
          <img src="/asset/topnav/alarm.png" alt="" />
        </div>
        <div className='linkImage'>
          <img  src="/asset/topnav/image 4.png" alt="" />
        </div>
        <div className='linkName'>
          <p>Adedeji</p>
        </div>
        <div className="arrow">
          <img src="/asset/topnav/arrow.png" alt="" />
        </div>
      </div>

      </div>
    </div>
  )
}
