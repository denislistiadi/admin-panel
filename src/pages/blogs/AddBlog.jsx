import React, { useEffect, useState } from 'react'
import { Button, message, Upload } from 'antd'
import { useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill'
import { Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import CustomInput from '../../components/CustomInput'
import { InboxOutlined } from '@ant-design/icons'
import 'react-quill/dist/quill.snow.css'
import ErrorModal from '../../components/Modal/ErrorModal'
import { createBlogApi, updateBlogApi } from '../../services/BlogService'
import { getCategoriesBlogApi } from '../../app/categoriesBlog'

const { Dragger } = Upload

const AddBlog = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { showModal } = ErrorModal()
  const data = useSelector((state) => state.blog)
  const categories = useSelector((state) => state.categoriesBlog.list.data)
  const [description, setDescription] = useState(data.form.description || '')

  const draggerProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files)
    },
  }

  const onSave = async (values, setSubmitting) => {
    const payload = {
      title: values.title,
      description: description,
      category: values.category,
    }
    try {
      data.isEdit ? await updateBlogApi(values._id, payload) : await createBlogApi(payload)
      navigate('/admin/blog-list')
    } catch (error) {
      console.error(error)
      showModal(error.response.data.message)
    } finally {
      setSubmitting(false)
    }
  }

  useEffect(() => {
    dispatch(getCategoriesBlogApi())
  }, [])

  return (
    <React.Fragment>
      <h3 className='mb-4'>{data.isEdit ? 'Edit Blog' : 'Add Blog'}</h3>
      <Formik
        initialValues={data.form}
        onSubmit={(values, { setSubmitting }) => onSave(values, setSubmitting)}
      >
        {({ values, setValues, isSubmitting }) => (
          <Form>
            {data.isEdit && (
              <div className='mb-4'>
                <Dragger {...draggerProps}>
                  <p className='ant-upload-drag-icon'>
                    <InboxOutlined />
                  </p>
                  <p className='ant-upload-text'>Click or drag file to this area to upload</p>
                  <p className='ant-upload-hint'>
                    Support for a single or bulk upload. Strictly prohibited from uploading company
                    data or other banned files.
                  </p>
                </Dragger>
              </div>
            )}
            <Field
              name='title'
              as={CustomInput}
              value={values.title}
              className='mt-3'
              onChange={(e) => setValues({ ...values, title: e.target.value })}
              label='Enter a title blog'
            />
            <Field as='select' className='form-control py-3 mb-3' name='category'>
              <option value=''>Select blog category</option>
              {categories.map((item) => (
                <option key={item._id} value={item.title}>
                  {item.title}
                </option>
              ))}
            </Field>
            <div className='my-3'>
              <ReactQuill theme='snow' value={description} onChange={setDescription} />
            </div>
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
    </React.Fragment>
  )
}

export default AddBlog
