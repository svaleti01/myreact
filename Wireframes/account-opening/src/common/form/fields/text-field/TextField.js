import React from 'react'
import { Form, Input, InputNumber } from 'antd'

import styles from './TextField.module.css'

const TextField = ({
  id,
  instruction,
  instructionClassName,
  label,
  labelWidth,
  placeholder,
  type,
  fieldWidth,
  required,
  defaultCurrencyValue,
}) => {
  const getInputField = (type) => {
    switch (type) {
      case 'password':
        return <Input.Password placeholder={placeholder} />
      case 'number':
        return <InputNumber placeholder={placeholder} />
      case 'currency':
        return (
          <InputNumber
            placeholder={placeholder}
            defaultValue={0}
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
          />
        )
      default:
        return <Input placeholder={placeholder} />
    }
  }
  return (
    <>
      <Form.Item
        name={[id]}
        labelCol={{ span: labelWidth }}
        wrapperCol={{ span: fieldWidth }}
        label={label}
        required={required}
      >
        {getInputField(type)}
      </Form.Item>
      {instruction && <p className={styles.instruction}> {instruction}</p>}
    </>
  )
}

export default TextField