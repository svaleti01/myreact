import React, { useContext } from 'react'

//import SelectField from '../common/form/fields/select-field/SelectField'
import TextField from '../../../../common/form/fields/text-field/TextField'
//import RadioGroupField from '../common/form/fields/radio-group-field/RadioGroupField'
import FieldGroup from '../../../../common/form/fields/field-group/FieldGroup'
//import CheckboxField from '../common/form/fields/checkbox-field/CheckboxField'
import StepsBuilder from '../../../../common/steps-builder/StepsBuilder'
import Button from '../../../../common/form/fields/button/CustomButton'

import { StepContext } from '../StepBuilderViewContent'

const thisViewKey = 'about'

const SampleViewContent = ({}) => {
  const stepContextValues = useContext(StepContext)
  const { goToNextStep } = stepContextValues
  return (
    <>
      <FieldGroup widths={[8, 4, 8]}>
        <TextField
          id="firstName"
          instruction="Enter your first name here"
          instructionClassName=""
          label="First Name"
          placeholder="First Name"
          type="text"
        />
        <TextField
          id="middleName"
          instruction="Enter your middle name here"
          instructionClassName=""
          label="Middle Name"
          placeholder="Middle Name"
          type="text"
        />
        <TextField
          id="lastName"
          instruction="Enter your last name here"
          instructionClassName=""
          label="Last Name"
          placeholder="Last Name"
          type="text"
        />
      </FieldGroup>
      <Button handleClick={() => goToNextStep(thisViewKey)}>Continue</Button>
    </>
  )
}

export default SampleViewContent
