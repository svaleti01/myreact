import React from 'react'

import { Form, Radio } from 'antd'

import styles from './RadioGroupField.module.css'

const RadioGroupField = ({
  id,
  options,
  instruction,
  instructionClassName,
  label,
  placeholder,
  onchange,
  type,
}) => (
  <>
    <Form.Item label={label}>
      <Radio.Group name={id} defaultValue={options[0].key} onChange={onchange}>
        {options.map((option) => (
          <Radio key={option.key} value={option.key}>
            {option.value}
          </Radio>
        ))}
      </Radio.Group>
    </Form.Item>
    {instruction && <p className={styles.instruction}> {instruction}</p>}
  </>
)
export default RadioGroupField