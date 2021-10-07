import React from 'react'
import { Form, Button } from 'react-bootstrap'
import cvLogo from '../../image/cv_logo.svg'

const ResetPassword = () => {
    return (
        <div className='auth'>
            <div className='auth-main'>
            <div className='auth-design'></div>
            <div className='auth-content'>
                <div>
                    <img src={cvLogo} className="cv-logo" alt="cv-logo"  />
                </div>
                <h2>Reset Your Password</h2><Form>
           <div className='form-content'>
           <Form.Group className="mb-3 form-input" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3 form-input" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
                <Form.Text className="text-muted">
                Fogot password?
                </Form.Text>
            </Form.Group>
           </div>
            <button className="btn btn-auth" type="button">Reset My Password</button>
          </Form>
       </div>
         </div>
         </div>
    )
}

export default ResetPassword
