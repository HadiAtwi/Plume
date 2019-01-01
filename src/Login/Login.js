import React from 'react'
import './Login.css';

const Login = () => {
  return (
    <div className="Form">
    <form>

<h1 className="title">Few more steps.</h1>
 {/* Username Form */}
 <div >
 <form>
   <fieldset className="username">
     Username
   </fieldset>
      <input className="inputform" type="text" username="username"/>
 </form>
 </div>


{/*Profile Pic */}
      <div className="profilepic">
      <fieldset >Profile pic</fieldset>
      </div>
      <div className="circle"> </div>
      <p className="textincircle">Upload +</p>
      
{/*Log in button*/}

<div className="whole">
<button href="" className="button">Done</button>
</div>

{/*Right side*/}
<div className="split right">
  <div className="centered">
    <img src={ require('./assets/images/logo.png') } />

  </div>
  <div className="centered" id="org">
  <img src={ require('./assets/images/org.png') } />
  </div>
  </div>

      </form>
      </div>


  )
}

export default Login;