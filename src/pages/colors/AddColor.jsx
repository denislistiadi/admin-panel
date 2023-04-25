import React from 'react'
import CustomInput from '../../components/CustomInput'

const AddColor = () => {
  return (
    <React.Fragment>
      <h3 className='mb-4'>Add Color</h3>
      <div className=''>
        <form action=''>
          <CustomInput type='color' label='Enter a Color' />
          <button className='btn btn-success border-0 rounded-3 my-4'>Add Color</button>
        </form>
      </div>
    </React.Fragment>
  )
}

export default AddColor
