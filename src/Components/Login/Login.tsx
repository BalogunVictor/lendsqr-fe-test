import './Login.scss'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='login'>

          <div className="logo">
            <img className='logoIcon' src="/asset/Union.png" alt="logo" />
            <img className='logoText' src="/asset/lendsqr.png" alt="logo" />
          </div>

      <div className='loginWrapper'>

        {/*left*/}
        <div className="leftWrapper">
          <div className='loginImage'>
            <img src="/asset/pablo-sign-in 1.svg" alt="loginImage" />
          </div>
        </div> 
          {/*right*/}
          
          <div className='rightWrapper'>
            <h1>welcome!</h1>
            <p>Enter details to login.</p>
            <form>
              <input className='inputForm' type="email" placeholder='Email'/>
              <input className='inputForm' type="password" placeholder='Password' />
              <p>Forgot PASSWORD?</p>
              <Link to='/dashboard'>
              <button>Log in</button>
              </Link>
            </form>
          </div>

        
      </div>
    </div>
  )
}

export default Login