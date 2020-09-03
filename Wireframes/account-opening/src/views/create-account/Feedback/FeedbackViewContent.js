import React, { useContext } from 'react'
import SelectField from '../../../common/form/fields/select-field/SelectField'
import FieldGroup from '../../../common/form/fields/field-group/FieldGroup'
import CustomButton from '../../../common/form/fields/button/CustomButton'
import { StepContext } from '../CreateAccountViewContent'

const stepKey = 'feedback'

const FeedbackViewContent = ({}) => {

  const stepContextValues = useContext(StepContext);
  const { goToPreviousStep } = stepContextValues;

  return (
    <>

    <h4>How did you know about Oriental Bank?</h4>
    <FieldGroup widths={[4]}>
      <SelectField 
        id="Know Oriental"
        instructionClassName=""
        placeholder="Select"
        options={[
          { key: 'Value0', value: 'Value0' },
          { key: 'Value1', value: 'Value1' },
          { key: 'Value2', value: 'Value2' },
          { key: 'Value3', value: 'Value3' },
         
        ]}
      />
      </FieldGroup>
    <h4>How often do you use?</h4>
   
      <FieldGroup widths={[4, 4, 4]}>
      <SelectField 
        id="Online Banking"
        instructionClassName=""
        label="Online Banking"
        placeholder="Select"
        options={[
          { key: 'Daily', value: 'Daily' },
          { key: 'Weekly', value: 'Weekly' },
          { key: 'Monthly', value: 'Monthly' },
          { key: '$Yearly', value: 'Yearly' },
         
        ]}
      />
  
         <SelectField 
        id="Mobile Banking"
        instructionClassName="" 
        label="Mobile Banking"
        placeholder="Select"
        options={[
            { key: 'Daily', value: 'Daily' },
            { key: 'Weekly', value: 'Weekly' },
            { key: 'Monthly', value: 'Monthly' },
            { key: '$Yearly', value: 'Yearly' },
        ]}
      />
        <SelectField 
        id="Visit Branch "
        instructionClassName=""
        label="Visit Branch "
        placeholder="Select"
        options={[
            { key: 'Daily', value: 'Daily' },
            { key: 'Weekly', value: 'Weekly' },
            { key: 'Monthly', value: 'Monthly' },
            { key: '$Yearly', value: 'Yearly' },
        ]}
      />
      </FieldGroup>
      <h4> Please access your account online now...</h4>

      <CustomButton
                size="default"
                type="primary"
                style={{ marginRight: '10px' }}
                handleClick={() => goToPreviousStep(stepKey)}
            >Previous</CustomButton>
            
            <CustomButton 
                size="default"
                type="primary"
            >Submit</CustomButton>
    </>
  )
}

export default FeedbackViewContent
