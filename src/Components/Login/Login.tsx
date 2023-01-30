import './Login.scss'

const Login = () => {
  return (
    <div className='login'>
      <div className='loginWrapper'>

        {/*left*/}
        <div className="leftWrapper">
          <div className="logoContainer">
            <img className='logoIcon' src="/asset/Union.png" alt="logo" />
            <img className='logoText' src="/asset/lendsqr.png" alt="logo" />
          </div>
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
              <button>Log in</button>
            </form>
          </div>

        
      </div>
    </div>
  )
}

export default Login