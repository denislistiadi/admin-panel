import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import CustomInput from '../../components/CustomInput'
import { Field, Form, Formik } from 'formik'
import { LoginApi } from '../../services/AuthService'
import { useDispatch, useSelector } from 'react-redux'
import { setLogged, setUser } from '../../app/auth'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const data = useSelector((state) => state.auth)

  const onSubmit = async (values, setSubmitting) => {
    try {
      const result = await LoginApi(values)
      const { token, ...user } = result.data
      dispatch(setLogged({ logged: true, token: token }))
      dispatch(setUser(user))
      navigate('/admin')
    } catch (error) {
      setError(error.response.data.message)
    } finally {
      setSubmitting(false)
    }
  }

  if (data.logged) {
    return <Navigate to='/admin' />
  }

  useEffect(() => {
    setTimeout(() => setError(''), 2000)
  }, [error])
  return (
    <div className='py-5 my-auto' style={{ background: '#ffd333', minHeight: '100vh' }}>
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <h3>Login</h3>
        <p>Login to your account to continue</p>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          // validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => onSubmit(values, setSubmitting)}
        >
          {({ values, setValues, isSubmitting }) => (
            <Form>
              <Field
                name='email'
                as={CustomInput}
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
                placeholder='email'
                label='Email Address'
              />
              <Field
                name='password'
                value={values.password}
                onChange={(e) => setValues({ ...values, password: e.target.value })}
                as={CustomInput}
                label='Password'
              />
              <p className='mb-3 text-end'>
                <Link to='/forgot-password'>Forgot Password?</Link>
              </p>
              {error && (
                <p className='text-danger' style={{ fontSize: '14px' }}>
                  {error}
                </p>
              )}
              <button
                className='border-0 px-3 py-2 text-white fw-bold w-100'
                style={{ background: '#ffd333' }}
                type='submit'
                loading={isSubmitting}
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Login
