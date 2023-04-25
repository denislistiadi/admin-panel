import React from 'react'
import CustomInput from '../../components/CustomInput'

const AddCategory = () => {
  return (
    <React.Fragment>
      <h3 className='mb-4'>Add Category</h3>
      <div className=''>
        <form action=''>
          <CustomInput type='text' label='Enter  Category' />
          <button className='btn btn-success border-0 rounded-3 my-4'>Add Category</button>
        </form>
      </div>
    </React.Fragment>
  )
}

export default AddCategory
