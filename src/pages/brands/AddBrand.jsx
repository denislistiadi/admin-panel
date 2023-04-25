import React from 'react'
import CustomInput from '../../components/CustomInput'

const AddBrand = () => {
  return (
    <React.Fragment>
      <h3 className='mb-4'>Add Brand</h3>
      <div className=''>
        <form action=''>
          <CustomInput type='text' label='Enter Brand' />
          <button className='btn btn-success border-0 rounded-3 my-4'>Add Brand</button>
        </form>
      </div>
    </React.Fragment>
  )
}

export default AddBrand
