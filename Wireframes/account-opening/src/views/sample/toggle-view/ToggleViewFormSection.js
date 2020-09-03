import React from 'react'

import SelectField from '../../../common/form/fields/select-field/SelectField'
import TextField from '../../../common/form/fields/text-field/TextField'
import RadioGroupField from '../../../common/form/fields/radio-group-field/RadioGroupField'

const FormSection = () => {
  return (
    <>
      <TextField
        id="firstName"
        instruction="Enter your first name here"
        instructionClassName=""
        label="First Name"
        placeholder="First Name"
        type="text"
        fieldWidth="12"
      />
      <SelectField
        id="status"
        instruction="Select the appropriate status"
        instructionClassName=""
        label="Status"
        options={[
          { key: 'notStarted', value: 'Not Started' },
          { key: 'inProgress', value: 'In Progress' },
          { key: 'completed', value: 'Completed' },
          { key: 'abandones', value: 'Abandoned' },
        ]}
        fieldWidth="12"
      />
      <RadioGroupField
        id="gender"
        instruction="Select gender"
        instructionClassName=""
        label="Gender"
        options={[
          { key: 'male', value: 'Male' },
          { key: 'female', value: 'Female' },
        ]}
      />
    </>
  )
}

export default FormSection
