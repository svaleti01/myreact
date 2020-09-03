import React from 'react'
import { Form, Checkbox } from 'antd'

import styles from './CheckboxGroupField.module.css'

const CheckboxGroupField = ({
  id,
  defaultValue,
  options,
  instruction,
  instructionClassName,
  label,
  onChange,
  placeholder,
  type,
}) => {
  return (
    <Form.Item label={label}>
      <Checkbox.Group
        options={options}
        defaultValue={defaultValue}
        onChange={onChange}
      />
      {instruction && <p className={styles.instruction}> {instruction}</p>}
    </Form.Item>
  )
}

export default CheckboxGroupField
