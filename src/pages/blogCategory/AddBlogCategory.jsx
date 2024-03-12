import React from 'react'
import { Field, Form, Formik } from 'formik'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import CustomInput from '../../components/CustomInput'
import { createCategoryBlog, updateCategoryBlog } from '../../services/BlogService'
import ErrorModal from '../../components/Modal/ErrorModal'

const AddBlogCategory = () => {
  const navigate = useNavigate()
  const { showModal } = ErrorModal()
  const data = useSelector((state) => state.categoriesBlog)

  const onSubmit = async (values, setSubmitting) => {
    try {
      data.isEdit
        ? await updateCategoryBlog(values._id, { title: values.title })
        : await createCategoryBlog({ title: values.title })
      navigate('/admin/blog-category')
    } catch (error) {
      console.log(error)
      showModal(error.response.data.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <React.Fragment>
      <h3 className='mb-4'>{data.isEdit ? 'Edit Blog Category' : 'Add Blog Category'}</h3>
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
                label='Enter Category'
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

export default AddBlogCategory
