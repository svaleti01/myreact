import React, { useState } from 'react'

import SelectField from '../common/form/fields/select-field/SelectField'
import TextField from '../common/form/fields/text-field/TextField'
import RadioGroupField from '../common/form/fields/radio-group-field/RadioGroupField'
import FieldGroup from '../common/form/fields/field-group/FieldGroup'
import CheckboxGroupField from '../common/form/fields/checkbox-group-field/CheckboxGroupField'
import StepsBuilder from '../common/steps-builder/StepsBuilder'
import LinkText from '../common/link-text/LinkText'
import { Tooltip, Modal } from 'antd'
import { TeamOutlined } from '@ant-design/icons'
import CustomButton from '../common/form/fields/button/CustomButton'

const SampleViewContent = ({}) => {
  const checkboxOptions = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: false },
  ]
  const steps = [
    { title: 'About you' },
    { title: 'Options', current: true },
    { title: 'Funding' },
    { title: 'Review' },
    { title: 'Terms' },
  ]
  const [modalVisible, setModalVisible] = useState(false)
  const toggleVisible = () => setModalVisible(!modalVisible)
  const [isLoadingState, setIsLoadingState] = useState({
    isLoading: false
  });
  const clickHandler = (event) => {
    console.log('Button Clicked!', event);
    mockServiceCall();
  }

  const mockServiceCall = () => {
    setIsLoadingState({isLoading: true});
    setTimeout(() => {
      setIsLoadingState({isLoading: false});
    }, 5000);
  }
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
      <CheckboxGroupField
        id="fruits"
        defaultValue="Apple"
        options={checkboxOptions}
        instruction="Please select an option"
        label="Fruits"
      />
      <TextField
        id="password"
        instruction="Enter your password here"
        instructionClassName=""
        label="Password"
        placeholder="First Name"
        type="password"
        fieldWidth="6"
      />
      <div>
        <LinkText text="I do nothing on Click!" />
      </div>
      <div>
        <Tooltip title="My Tooltip text!" trigger="click">
          <LinkText text="I open a tooltip on click!" />
        </Tooltip>
      </div>

      <div>
        <LinkText text="I open a modal on click!" onClick={toggleVisible} />
      </div>
      <Modal
        title="Basic Modal"
        visible={modalVisible}
        onOk={toggleVisible}
        onCancel={toggleVisible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <CustomButton
        type = 'primary'           // default | primary | ghost | dashed | danger | link | text
        size = 'middle'            // large | middle | small
        shape = 'round'           // circle | round
        disabled = {false}        // true | false
        block = {false}           // true | false
        loading = {isLoadingState.isLoading}     // true | false
        icon = {<TeamOutlined />}
        handleClick = {clickHandler}>
        Create Account
      </CustomButton>
    </>
  )
}

export default SampleViewContent
