import React, { useRef, useState, useContext } from 'react'

import SelectField from '../../../common/form/fields/select-field/SelectField'
import TextField from '../../../common/form/fields/text-field/TextField'
import Text from 'antd/lib/typography/Text'
import { Tooltip, Button } from 'antd'
import CheckboxField from '../../../common/form/fields/checkbox-field/CheckboxField'
import FieldGroup from '../../../common/form/fields/field-group/FieldGroup'
import SignaturePadField from '../../../common/form/fields/signature-field/SignaturePadField'
import TermsAndConditions from '../../../common/terms-condition/TermsAndConditions'
import CustomButton from '../../../common/form/fields/button/CustomButton'
import Modal from 'antd/lib/modal/Modal'
import RadioGroupField from '../../../common/form/fields/radio-group-field/RadioGroupField'

import { StepContext } from '../CreateAccountViewContent'

const stepKey = 'postAccountOpening'


const PostAccountFulfillmentViewContent = ({ }) => {

  const stepContextValues = useContext(StepContext);
  const { goToPreviousStep, goToNextStep } = stepContextValues;


  const checkboxOptions = [
    {
      label: 'Customer have read and agreed to the terms and conditions of the Oriental Banking Agreement and Disclosure', value: 'agreement',
      disabled: false
    }
  ]


  const accoutPurposeOptions = [
    { key: 'purpose1', value: 'Account Opening Purpose 1' },
    { key: 'purpose2', value: 'Account Opening Purpose 2' },
    { key: 'purpose3', value: 'Account Opening Purpose 3' },
    { key: 'purpose4', value: 'Account Opening Purpose 4' },
  ]

  const sourceOfFundOptions = [
    { key: 'source1', value: 'Fund Source 1' },
    { key: 'source2', value: 'Fund Source 2' },
    { key: 'purpose3', value: 'Fund Source 3' },
  ]

  // //  Signatures Attributes 
  // const sigCanvas = useRef({})
  // const clear = () => sigCanvas.current.clear()
  // const [imageURL, setImageUrl] = useState(null)
  // const save = () => setImageUrl(sigCanvas.current.getTrimmedCanvas.toDataURL("image/png"))

  //Signatures constants 
  const [modalVisible, setModalVisible] = useState(false)
  const [modalVisibleSecondSign, setModalVisibleSecondSign] = useState(false)
  const toggleVisible = () => setModalVisible(!modalVisible)
  const toggleVisibleSecondSign = () => setModalVisibleSecondSign(!modalVisibleSecondSign)
  const save = () => setSave(true)
  const clear = () => setClear(true)


  const [saveState, setSave] = useState(false)
  const [clearState, setClear] = useState(false)


  return (

    <>

      <p>Complete account enrollment & fulfillment</p>

      <TextField
        id="userId"
        label="User ID"
        placeholder="Enter your User ID here"
        type="text"
        fieldWidth="5"
      />

      <FieldGroup widths={[6, 6]}>
        <TextField
          id="password"
          label="Password"
          placeholder="Password"
          type="password"
          required="true"
        />

        <TextField
          id="password"
          label="Re Enter Password"
          placeholder="Re Enter Password"
          type="password"
        />
      </FieldGroup>

      <TermsAndConditions options={["Online Banking Enrollment", "Privacy Statement"]} />

      <p style={{ margin: '40px' }}></p>

      <FieldGroup widths={[6, 6]}>
        <TextField
          id="password"
          label="Password"
          placeholder="Password"
          type="password"
          required="true"
        />
        <TextField
          id="passwordClue"
          label="Password Clue"
          placeholder="Password Clue"
          type="text"
          required="true"
        />
      </FieldGroup>

      {/* <p>Review with customer <a>Online Banking Enrollment</a> and <a>Privacy Statement</a></p>

      <CheckboxField
        id="Agreement"
        defaultValue=""
        instruction=""
        options={checkboxOptions}
        label=""
      /> */}
      {/* 
      <FieldGroup widths={[6, 8]}>
        <TextField
          id="password"
          instruction="Enter your password"
          instructionClassName=""
          label="Password"
          placeholder="Password"
          type="text"
          required="required"
        />
        <TextField
          id="passwordClue"
          instruction="Enter your password clue"
          instructionClassName=""
          label="Password Clue"
          placeholder="Password Clue"
          type="text"
          required="required"
        />
      </FieldGroup> */}

      <FieldGroup widths={[4, 4, 4]}>

        <CheckboxField
          id="managerCheques"
          checkboxLabel="Manager Cheques"
          checked={false}
          onChange=""
        />
        <TextField
          id="count"
          label="Count"
          placeholder="Count"
          type="number"
        />
        <TextField
          id="amount"
          label="Amount"
          placeholder="Amount"
          type="currency"
        />

      </FieldGroup>

      <FieldGroup widths={[4, 4, 4]}>

        <CheckboxField
          id="cashTransaction"
          checkboxLabel="Transaction in Cash"
          onChange=""
          checked={false}
        />
        <TextField
          id="count"
          label="Count"
          placeholder="Count"
          type="number"
        />
        <TextField
          id="amount"
          label="Amount"
          placeholder="Amount"
          type="currency"
        />

      </FieldGroup>

      <FieldGroup widths={[4, 4, 4]}>

        <CheckboxField
          id="chequeTranaction"
          checkboxLabel="Transaction in Cheque"
          checked={false}
        />
        <TextField
          id="count"
          label="Count"
          placeholder="Count"
          type="number"
        />
        <TextField
          id="amount"
          label="Amount"
          placeholder="Amount"
          type="currency"
        />

      </FieldGroup>

      <FieldGroup widths={[4, 4, 4]}>

        <CheckboxField
          id="achTransaction"
          defaultValue=""
          checkboxLabel="Make / receive ACH transaction"
          checked={false}
        />
        <TextField
          id="count"
          label="Count"
          placeholder="Count"
          type="number"
        />
        <TextField
          id="amount"
          label="Amount"
          placeholder="Amount"
          type="currency"
        />

      </FieldGroup>

      <FieldGroup widths={[4, 4, 4]}>

        <CheckboxField
          id="wireTransaction"
          checkboxLabel="Wire Transaction"
          checked={false}
        />
        <TextField
          id="count"
          label="Count"
          placeholder="Count"
          type="number"
        />
        <TextField
          id="amount"
          label="Amount"
          placeholder="Amount"
          type="currency"
        />
      </FieldGroup>



      <p style={{ textAlign: 'left' }}>Fundings Details</p>


      <FieldGroup widths={[5, 6]}>

        <TextField
          id="routingNumber"
          label="Routing Number"
          placeholder="Routing Number"
          type="number"
        />

        <SelectField
          id="purposeOfAccount"
          placeholder="Purpose of Account"
          label="Purpose of Account"
          options={accoutPurposeOptions}
        />

      </FieldGroup>

      <FieldGroup widths={[5, 6]}>

        <TextField
          id="accountNumber"
          label="Account Number"
          placeholder="Account Number"
          type="number"
          fieldWidth="16"
        />

        <SelectField
          id="sourceOfFund"
          label="Source of Fund"
          placeholder="Source of Fund"
          options={sourceOfFundOptions}
        />

      </FieldGroup>

      <TextField
        id="depositAmount"
        label="Deposit Number"
        placeholder="Deposit Number"
        type="number"
        fieldWidth="16"
      />

      <RadioGroupField
        id="moneyAddingToAccount"
        label="Adding money to account"
        options={[
          { key: 'yes', value: 'Yes' },
          { key: 'no', value: 'No' },
        ]}
      />

      <p style={{ textAlign: 'left' }}>Signature Upload</p>

      <CustomButton
        style={{ margin: '20px' }}
        shape="round"
        size="default"
        type="block"
        handleClick={toggleVisible}>
        Primary Applicant Signature or Upload
      </CustomButton>
      <Modal
        title="Signature Upload First"
        visible={modalVisible}
        onOk={toggleVisible}
        onCancel={toggleVisible}
        footer={[
          <CustomButton handleClick={save}>Save</CustomButton>,
          <CustomButton handleClick={clear}>Clear</CustomButton>

        ]}
      >
        <SignaturePadField
          saveState={saveState}
          clearState={clearState}
        />
      </Modal>

      <CustomButton
        style={{ margin: '20px' }}
        shape="round"
        size="default"
        type="block"
        handleClick={toggleVisibleSecondSign}
      >Secondary Applicant Signature or Upload</CustomButton>
      <Modal
        title="Signature Upload Second"
        visible={modalVisibleSecondSign}
        onOk={toggleVisibleSecondSign}
        onCancel={toggleVisibleSecondSign}
        footer={[
          <CustomButton handleClick={save}>Save</CustomButton>,
          <CustomButton handleClick={clear}>Clear</CustomButton>

        ]}
      >
        <SignaturePadField
          saveState={saveState}
          clearState={clearState}
        />
      </Modal>
      <div>
        <CustomButton
          size="default"
          type="primary"
          style={{ marginRight: '10px' }}
          handleClick={() => goToPreviousStep(stepKey)}
        >Previous</CustomButton>

        <CustomButton
          size="default"
          type="primary"
          handleClick={() => goToNextStep(stepKey)}
        >Next</CustomButton>

      </div>



    </>
  )
}

export default PostAccountFulfillmentViewContent
