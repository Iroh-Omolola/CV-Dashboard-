import React from 'react'
import { Form} from 'react-bootstrap'
import cvLogo from '../../image/cv_logo.svg'

const ResetSuccess = () => {
    return (
        <div className='auth'>
            <div className='auth-main'>
            <div className='auth-design'></div>
            <div className='auth-content'>
                <div>
                    <img src={cvLogo} className="cv-logo" alt="cv-logo"  />
                </div>
                <h2>Successful Password Reset!</h2><Form>
             <div className='form-content'>
             <p>You can now use your new password to sign in to your account</p>
           </div>
            <button className="btn btn-auth" type="button">Sign In</button>
          </Form>
       </div>
         </div>
         </div>
    )
}

export default ResetSuccess
