import React, { useContext } from 'react'
import { Form } from 'antd';

import SelectField from '../../../common/form/fields/select-field/SelectField'
import TextField from '../../../common/form/fields/text-field/TextField'
import RadioGroupField from '../../../common/form/fields/radio-group-field/RadioGroupField'
import FieldGroup from '../../../common/form/fields/field-group/FieldGroup'
import DateField from '../../../common/form/fields/date-field/DateField'
import CheckboxGroupField from '../../../common/form/fields/checkbox-group-field/CheckboxGroupField'
import CustomButton from '../../../common/form/fields/button/CustomButton'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { StepContext } from '../CreateAccountViewContent'

const thisViewKey = 'basicInfo'

//import InputField from '../common/form/fields/Input-Field/InputField'

const CustomerBasicContent = ({ }) => {
  const [form] = Form.useForm();
  const checkboxOptions = [
    { label: 'Yes', value: 'Yes' },
    { label: 'No', value: 'No' }
  ]
  const genderValue = [
    { key: 'male', value: 'Male' },
    { key: 'female', value: 'Female' },
    { key: 'others', value: 'Others' }
  ]
  const maritalStatus = [
    { key: 'married', value: 'Married' },
    { key: 'single', value: 'Single' },
    { key: 'divorced', value: 'Divorced' },
    { key: 'widowed', value: 'Widowed' },
  ]
  //const stepContextValues = useContext(StepContext);
  //const { goToNextStep, state } = stepContextValues;
  //const stepIndex = state.steps.findIndex((step) => step.key === thisViewKey);
  //console.log('saved data', state);
  return (
    <>
      <Form form={form} >
        <FieldGroup widths={[6, 6]}>
          <TextField
            id="firstName"
            instruction=""
            instructionClassName=""
            label="First Name"
            placeholder="Enter your first name"
            type="text"
          />
          <TextField
            id="lastName"
            instruction=""
            instructionClassName=""
            label="Last Name"
            placeholder="Enter your last name"
            type="text"
          />
        </FieldGroup>
        <FieldGroup widths={[6, 6]}>
          <TextField
            id="custUserName"
            instruction=""
            instructionClassName=""
            label="User Name"
            placeholder="Enter User Name"
            type="text"
          />
          <TextField
            id="custPassword"
            instruction=""
            instructionClassName=""
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
        </FieldGroup>
        <p><b>Address: </b></p>
        <TextField
          id="Line 1"
          instruction=""
          instructionClassName=""
          label="Address Line 1"
          placeholder="Enter Address Line 1"
          fieldWidth="6"
          type="text"
        />
        <TextField
          id="Line 2"
          instruction=""
          instructionClassName=""
          label="Address Line 2"
          placeholder="Enter tAddress Line 2"
          fieldWidth="6"
          type="text"
        />
        <FieldGroup widths={[6, 6, 6]}>
          <TextField
            id="City"
            instruction=""
            instructionClassName=""
            label="City"
            placeholder="Enter City"
            type="text"
          />
          <TextField
            id="State"
            instruction=""
            instructionClassName=""
            label="State"
            placeholder="Enter State"
            type="text"
          />
          <TextField
            id="ZipCode"
            instruction=""
            instructionClassName=""
            label="ZipCode"
            placeholder="Enter Zipcode"
            type="text"
          />
        </FieldGroup>
        <TextField
          id="emailID"
          instruction=""
          label="Email ID"
          instructionClassName=""
          placeholder="Enter Email-ID"
          fieldWidth="6"
          type="text"
        />
        <TextField
          id="phoneNumber"
          instruction=""
          instructionClassName=""
          label="Contact no "
          placeholder=""
          fieldWidth="10"
          type="number"
        />
        <DateField
          id="bdate"
          label="Birth Date"
          instruction="Enter birth date"
          size="10"
          locale=""
        />
        <FieldGroup widths={[6, 6]}>
          <TextField
            id="accounttype"
            instruction=""
            instructionClassName=""
            label="Account type"
            placeholder="Enter Account type"
            type="text"
          />
          <TextField
            id="branchname"
            instruction=""
            instructionClassName=""
            label="Branch Name"
            placeholder="Enter Branch Name"
            type="text"
          />
        </FieldGroup>
        <TextField
          id="initialdepositamount"
          instruction=""
          instructionClassName=""
          label="Initial Deposit Amount"
          placeholder="Enter Initial Deposit Amount"
          fieldWidth="6"
          type="text"
        />
        <FieldGroup widths={[6, 6]}>
          <TextField
            id="identificationprooftype"
            instruction=""
            instructionClassName=""
            label="Identification Proof Type"
            placeholder="Enter Identification Proof Type"
            type="text"
          />
          <TextField
            id="identificationdocumentno"
            instruction=""
            instructionClassName=""
            label="Identification Document No"
            placeholder="Enter Identification Document No"
            type="text"
          />
        </FieldGroup>
        <CountryDropdown
          defaultOptionLabel="Select a country, man."
           />
        <RegionDropdown
          blankOptionLabel="No country selected, man."
          defaultOptionLabel="Now select a region, pal."
           />

      </Form>
    </>
  )
}

export default CustomerBasicContent
