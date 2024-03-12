import React from 'react'
import CustomInput from '../../components/CustomInput'
import { Field, Form, Formik } from 'formik'
import { Button } from 'antd'
import { useSelector } from 'react-redux'
import { createBrandProduct, updateBrandProduct } from '../../services/ProductService'
import { useNavigate } from 'react-router-dom'

const AddBrand = () => {
  const navigate = useNavigate()
  const data = useSelector((state) => state.brand)

  const onSubmit = async (values, setSubmitting) => {
    try {
      data.isEdit
        ? await updateBrandProduct(values._id, { title: values.title })
        : await createBrandProduct({ title: values.title })
      navigate('/admin/brand')
    } catch (error) {
      console.log(error)
    } finally {
      setSubmitting(false)
    }
  }
  return (
    <React.Fragment>
      <h3 className='mb-4'>{data.isEdit ? 'Edit Brand' : 'Add Brand'}</h3>
      <div className=''>
        <Formik
          initialValues={data.form}
          // validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => onSubmit(values, setSubmitting)}
        >
          {({ values, setValues, isSubmitting }) => (
            <Form>
              <Field
                name='text'
                as={CustomInput}
                value={values.title}
                onChange={(e) => setValues({ ...values, title: e.target.value })}
                label='Enter Brand'
              />
              <Button
                className='btn btn-success px-3 rounded-3'
                type='primary'
                htmlType='submit'
                size='large'
                loading={isSubmitting}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  )
}

export default AddBrand
