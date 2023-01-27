import React from 'react'
import { Link } from 'react-router-dom'
import CustomInput from '../components/CustomInput'

const Login = () => {
  return (
    <div className='py-5 my-auto' style={{ background: '#ffd333', minHeight: '100vh' }}>
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <h3>Login</h3>
        <p>Login to your account to continue</p>
        <form action=''>
          <CustomInput type='email' label='Email Address' id='email' />
          <CustomInput type='password' label='Password' id='pass' />
          <p className='mb-3 text-end'>
            <Link to='/forgot-password'>Forgot Password?</Link>
          </p>
          <button
            className='border-0 px-3 py-2 text-white fw-bold w-100'
            style={{ background: '#ffd333' }}
            type='submit'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
