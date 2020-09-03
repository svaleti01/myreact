import React from 'react'
import { Form, Select, Option } from 'antd'

import styles from './SelectField.module.css'

const SelectField = ({
  id,
  fieldWidth,
  options,
  instruction,
  instructionClassName,
  label,
  labelWidth,
  placeholder,
  type,
}) => (
  <>
    <Form.Item
      labelCol={{ span: labelWidth }}
      wrapperCol={{ span: fieldWidth }}
      label={label}
    >
      <Select placeholder={placeholder}>
        {options.map((option) => (
          <Select.Option key={option.key} value={option.key}>
            {option.value}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
    {instruction && <p className={styles.instruction}> {instruction}</p>}
  </>
)

export default SelectField