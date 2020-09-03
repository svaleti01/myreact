import React, { useState } from 'react'

import SelectField from '../../common/form/fields/select-field/SelectField'
import TextField from '../../common/form/fields/text-field/TextField'
import RadioGroupField from '../../common/form/fields/radio-group-field/RadioGroupField'
import FieldGroup from '../../common/form/fields/field-group/FieldGroup'
import CheckboxField from '../../common/form/fields/checkbox-field/CheckboxField'
import { Anchor } from 'antd';
import { useToggle } from '../../common/hooks/useToggle'
import styles from './LoginPageContent.module.css'



const LoginPageContent = (props) => {

  const [isOpen, toggle] = useToggle(false)
  const [isOpen1, toggle1] = useToggle(false)





  const { Link } = Anchor;


  return (<><div className={styles.content} >
    <FieldGroup widths={[4, 4]}>
      <Anchor className={styles.anchor}>
        <b><u >
          <Link href="#components-anchor-demo-basic" title="Apply now" />
        </u></b></Anchor>
    </FieldGroup>
    <br></br><br />

    <RadioGroupField
      id="alreadyacustomer"
      onchange={toggle}

      label="Already a customer?"
      options={[
        { key: 'no', value: 'No' },
        { key: 'yes', value: 'Yes' },
      ]}
    ></RadioGroupField>

    {isOpen &&
      <FieldGroup widths={[4, 4]}>
        <TextField
          id="username"

          instructionClassName=""
          label="Username"
          placeholder="User Name"
          type="text"

        />

        <TextField
          id="password"

          instructionClassName=""
          label="Password"
          placeholder="password"
          type="password"

        />
      </FieldGroup>}

    <br></br>
    <RadioGroupField
      id="newtobank"
      onchange={toggle1}
      instructionClassName=""
      label="New To Bank?"
      options={[
        { key: 'no', value: 'No' },
        { key: 'yes', value: 'Yes' },
      ]}
    />
    {isOpen1 &&
      <FieldGroup widths={[6, 6]}>
        <SelectField
          id="product"

          instructionClassName=""
          label="Choose a product:"
          options={[
            { key: 'creditcard', value: 'Credit Card' },
            { key: 'debitcard', value: 'Debit Card' },
            { key: 'insurance', value: 'Insurance' }

          ]}
          fieldWidth="12"
        />
      </FieldGroup>}</div>
  </>);
};

export default LoginPageContent;