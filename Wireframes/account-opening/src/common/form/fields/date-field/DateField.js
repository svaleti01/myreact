import React from 'react'
import { Form, DatePicker } from 'antd'

import styles from './DateField.module.css'

const DateField = ({
  id,
  defaultValue,
  options,
  instruction,
  instructionClassName,
  label,
  onChange,
  locale,
  size,
  placeholder,
}) => {
  return (
    <>
      <Form.Item label={label}>
        <DatePicker defaultValue={defaultValue} onChange={onChange} placeholder={instruction}/>
      </Form.Item>
    </>
  )
}

export default DateField