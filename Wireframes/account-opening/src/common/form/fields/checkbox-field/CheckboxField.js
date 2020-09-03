import React from 'react'
import { Form, Checkbox } from 'antd'
import { useToggle } from '../../../hooks/useToggle'
import styles from './CheckboxField.module.css'

const CheckboxField = ({
  id,
  checkboxLabel,
  checked,
  disabled,
  instruction,
  label,
  onChange,
}) => {
  const [isCheked, toggleChecked] = useToggle(checked)
  return (
    <>
      <Form.Item label={label}>
        <Checkbox
          name={id}
          checked={isCheked}
          disabled={disabled}
          onChange={toggleChecked}
        >
          {checkboxLabel}
        </Checkbox>
      </Form.Item>
      {instruction && <p className={styles.instruction}> {instruction}</p>}
    </>
  )
}

export default CheckboxField