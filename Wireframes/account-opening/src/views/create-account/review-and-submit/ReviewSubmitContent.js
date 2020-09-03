import React, { useContext } from 'react'
import TextField from '../../../common/form/fields/text-field/TextField'
import FieldGroup from '../../../common/form/fields/field-group/FieldGroup'
import RadioGroupField from '../../../common/form/fields/radio-group-field/RadioGroupField'
import SelectField from '../../../common/form/fields/select-field/SelectField'
import DateField from '../../../common/form/fields/date-field/DateField'
import { moment } from 'moment'
import CheckboxField from '../../../common/form/fields/checkbox-field/CheckboxField'
import CustomButton from '../../../common/form/fields/button/CustomButton'
import { StepContext } from '../CreateAccountViewContent'
import './ReviewSubmitContentStyle.css';
import { Descriptions } from 'antd';

const stepKey = 'reviewAndSubmit'

const ReviewSubmitContent = ({ }) => {

  const stepContextValues = useContext(StepContext);
  const { goToPreviousStep, goToNextStep } = stepContextValues;

  const custData = {
    custName: {
      firstName: 'John',
      middleName: 'Kr',
      lastName: 'Doe'
    },
    gender: 'Male',
    address: {
      addressLine1: 'Test',
      addressLine2: 'Test2'
    },
    maritalStatus: 'single',
    city: 'Chicago',
    state: 'Illinois',
    zip: '6110068',
    country: 'USA',
    birthDate: '25-Aug-1975',
    emailId: 'xyz@test.com',
    mobileNumber: '2564172568',
    OTP: '1345',
    citizenship: 'yes',
    ssn: '2354715896',
    dualCitizenship: 'yes',
    residance: 'USA',
    incomeNature: 'Capital Gains',
    employer: 'ABC Corp',
    workPhone: '0091256478',
    occupation: 'Business',
    annualIncome: '>5 LPA',
    coApplicant: 'Yes',
    primaryApplicant: 'John Doe',
    debitCard: 'Yes',
    secondaryApplicant: 'Jenny Doe',
    relationShip: 'Spouse',
    noOfSignature: 'One',
    mailingAddress: 'Primary Applicant\'s Mailing Address'
  }
  return (
    <div>
      <div className="ReviewSubmitContent">
        <Descriptions bordered
          title="Customer Details"
          size="small"
          layout="vertical"
          extra={<CustomButton
            size="small"
            type="primary"
            style={{ marginRight: '10px' }}
            handleClick={() => goToPreviousStep(stepKey)}
          >Edit</CustomButton>}>
          <Descriptions.Item label="First Name">{custData.custName.firstName}</Descriptions.Item>
          <Descriptions.Item label="Middle Name">{custData.custName.middleName}</Descriptions.Item>
          <Descriptions.Item label="Last Name">{custData.custName.lastName}</Descriptions.Item>
        </Descriptions>

        <Descriptions bordered size="small" column={2} layout="vertical">
          <Descriptions.Item label="Gender" span={1.5}>{custData.gender}</Descriptions.Item>
          <Descriptions.Item label="Marital Status" span={1.5}>{custData.maritalStatus}</Descriptions.Item>
        </Descriptions>

        <Descriptions bordered size="small" column={2} layout="vertical">
          <Descriptions.Item label="Address Line 1">{custData.address.addressLine1}</Descriptions.Item>
          <Descriptions.Item label="Address Line 2">{custData.address.addressLine2}</Descriptions.Item>
        </Descriptions>

        <Descriptions bordered size="small" column={4} layout="vertical"> 
          <Descriptions.Item label="City">{custData.city}</Descriptions.Item>
          <Descriptions.Item label="State">{custData.state}</Descriptions.Item>
          <Descriptions.Item label="Zipcode">{custData.zip}</Descriptions.Item>
          <Descriptions.Item label="Country">{custData.country}</Descriptions.Item>
        </Descriptions>

        <Descriptions bordered size="small" layout="vertical"> 
          <Descriptions.Item label="Birth Date">{custData.birthDate}</Descriptions.Item>
        </Descriptions>

        <Descriptions bordered size="small" layout="vertical">  
          <Descriptions.Item label="Email Id">{custData.emailId}</Descriptions.Item>
        </Descriptions>

        <Descriptions bordered size="small" layout="vertical">
          <Descriptions.Item label="Mobile Number">{custData.mobileNumber}</Descriptions.Item>
          <Descriptions.Item label="OTP">{custData.OTP}</Descriptions.Item>
        </Descriptions>

        <Descriptions bordered size="small" column={4} layout="vertical"> 
          <Descriptions.Item label="US Citizen">{custData.citizenship}</Descriptions.Item>
          <Descriptions.Item label="SSN No">{custData.ssn}</Descriptions.Item>
          <Descriptions.Item label="Dual Citizenship">{custData.dualCitizenship}</Descriptions.Item>
          <Descriptions.Item label="Country of Residence">{custData.residance}</Descriptions.Item>
        </Descriptions>
      </div>

      <div className="ReviewSubmitContent">
        <Descriptions bordered
          title="Employment Details"
          size="small"
          layout="vertical"
          extra={<CustomButton
            size="small"
            type="primary"
            style={{ marginRight: '10px' }}
            handleClick={() => goToPreviousStep(stepKey)}
          >Edit</CustomButton>}>
          <Descriptions.Item label="Nature Of Income">{custData.incomeNature}</Descriptions.Item>
          <Descriptions.Item label="Name of the Employer">{custData.employer}</Descriptions.Item>
        </Descriptions>

        <Descriptions bordered size="small" layout="vertical"> 
          <Descriptions.Item label="Work Phone">{custData.workPhone}</Descriptions.Item>
          <Descriptions.Item label="Occupation">{custData.occupation}</Descriptions.Item>
        </Descriptions>

        <Descriptions bordered size="small" layout="vertical"> 
          <Descriptions.Item label="Annual Income">{custData.annualIncome}</Descriptions.Item>
        </Descriptions>

        <Descriptions bordered size="small" layout="vertical"> 
          <Descriptions.Item label="Add Co-Applicant">{custData.coApplicant}</Descriptions.Item>
        </Descriptions>
      </div>

      <div className="ReviewSubmitContent">
        <Descriptions bordered
          title="Account Details"
          size="small"
          layout="vertical"
          extra={<CustomButton
            size="small"
            type="primary"
            style={{ marginRight: '10px' }}
            handleClick={() => goToPreviousStep(stepKey)}
          >Edit</CustomButton>}>
          <Descriptions.Item label="Primary Applicant Name">{custData.primaryApplicant}</Descriptions.Item>
          <Descriptions.Item label="Debit Card Required">{custData.debitCard}</Descriptions.Item>
        </Descriptions>

        <Descriptions bordered size="small" layout="vertical"> 
          <Descriptions.Item label="Secondary Applicant Name">{custData.secondaryApplicant}</Descriptions.Item>
          <Descriptions.Item label="Relationship">{custData.relationShip}</Descriptions.Item>
          <Descriptions.Item label="Debit Card Required">{custData.debitCard}</Descriptions.Item>
        </Descriptions>

        <Descriptions bordered size="small" layout="vertical"> 
          <Descriptions.Item label="Number Of Signatures">{custData.noOfSignature}</Descriptions.Item>
        </Descriptions>

        <Descriptions bordered size="small" layout="vertical"> 
          <Descriptions.Item label="Mailing Address">{custData.mailingAddress}</Descriptions.Item>
        </Descriptions>
      </div>
      
      <div className="BottomNavButtons">
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

    </div>
  )

}
export default ReviewSubmitContent