import React from 'react'

const CustomInput = (props) => {
  const { type, label, i_id, i_class, value, onChange } = props
  return (
    <div className='form-floating mb-3'>
      <input
        type={type}
        placeholder={label}
        value={value}
        onChange={onChange}
        className={`form-control ${i_class}`}
        id={i_id}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  )
}

export default CustomInput
