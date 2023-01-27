import React from 'react'
import CustomInput from '../components/CustomInput'

const ForgotPassword = () => {
  return (
    <div className='py-5 my-auto' style={{ background: '#ffd333', minHeight: '100vh' }}>
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <h3>Forgot Password</h3>
        <p>Please enter your register email to reset password</p>
        <form action=''>
          <CustomInput type='email' label='Email Address' id='email' />
          <button
            className='border-0 px-3 py-2 text-white fw-bold w-100'
            style={{ background: '#ffd333' }}
            type='submit'
          >
            Send Link
          </button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
