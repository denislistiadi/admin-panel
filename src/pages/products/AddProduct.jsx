import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import { InboxOutlined } from '@ant-design/icons'
import { message, Upload } from 'antd'
const { Dragger } = Upload
import 'react-quill/dist/quill.snow.css'
import CustomInput from '../../components/CustomInput'

const AddProduct = () => {
  const [desc, setDesc] = useState('')

  const props = {
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

  return (
    <React.Fragment>
      <h3 className='mb-4'>Add Product</h3>
      <div className=''>
        <form action=''>
          <Dragger {...props}>
            <p className='ant-upload-drag-icon'>
              <InboxOutlined />
            </p>
            <p className='ant-upload-text'>Click or drag file to this area to upload</p>
            <p className='ant-upload-hint'>
              Support for a single or bulk upload. Strictly prohibited from uploading company data
              or other banned files.
            </p>
          </Dragger>
          <div className='mt-3'>
            <CustomInput type='text' label='Enter Product Title' />
          </div>
          <div className='mb-3'>
            <ReactQuill theme='snow' value={desc} onChange={setDesc} />
          </div>
          <CustomInput type='text' label='Enter Price' />
          <select name='' className='form-control py-3 mb-3' id=''>
            <option value=''>Select category</option>
          </select>
          <select name='' className='form-control py-3 mb-3' id=''>
            <option value=''>Select brand</option>
          </select>
          <select name='' className='form-control py-3 mb-3' id=''>
            <option value=''>Select color</option>
          </select>
          <button className='btn btn-success border-0 rounded-3 my-4'>Add Product</button>
        </form>
      </div>
    </React.Fragment>
  )
}

export default AddProduct
