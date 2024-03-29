import React from 'react'
import CustomInput from '../../components/CustomInput'

const ResetPassword = () => {
  return (
    <div className='py-5 my-auto' style={{ background: '#ffd333', minHeight: '100vh' }}>
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <h3>Reset Password</h3>
        <p>Please enter your new password</p>
        <form action=''>
          <CustomInput type='password' label='New Password' id='pass' />
          <CustomInput type='password' label='Confirm Password' id='confirmpass' />
          <button
            className='border-0 px-3 py-2 text-white fw-bold w-100'
            style={{ background: '#ffd333' }}
            type='submit'
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
