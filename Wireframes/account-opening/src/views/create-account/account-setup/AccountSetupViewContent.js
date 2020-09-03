import React, { useState, useContext } from 'react'

import TextField from '../../../common/form/fields/text-field/TextField'
import FieldGroup from '../../../common/form/fields/field-group/FieldGroup'
import CheckboxField from '../../../common/form/fields/checkbox-field/CheckboxField'
import SelectField from '../../../common/form/fields/select-field/SelectField'
import RadioGroupField from '../../../common/form/fields/radio-group-field/RadioGroupField'
import CustomButton from '../../../common/form/fields/button/CustomButton'
import ChatWidget from '../../../common/chat-widget/ChatWidget'

import { StepContext } from '../CreateAccountViewContent'

const stepKey = 'accountSetup'


const AccountSetupViewContent = ({ }) => {

    const stepContextValues = useContext(StepContext);
    const { goToPreviousStep, goToNextStep } = stepContextValues;

    const emailOptions = [
        { key: 'primary', value: "Primary Applicant's Mailing Address" },
        { key: 'secondary', value: 'Secondary Applicant\'s Mailing Address' },
        { key: 'others', value: 'Other Mailing Address', disabled: false },
    ]

    const relationshipOptions = [
        { key: 'father', value: 'Father' },
        { key: 'mother', value: 'Mother' },
        { key: 'son', value: 'Son' },
        { key: 'daughter', value: 'Daughter' },
        { key: 'spouse', value: 'Spouse' },
        { key: 'others', value: 'Others', disabled: false },

    ]

    return (
        <>
            <h2>Account signatory</h2>

            <FieldGroup widths={[6, 6]}>
                <TextField
                    id="primaryApplicant"
                    label="Primary Applicant Name"
                    placeholder="Primary Applicant"
                    type="text"
                />
                <CheckboxField
                    id="debitCardPrimary"
                    label="Debit Card Required"
                    checked={false}
                />
            </FieldGroup>


            <FieldGroup widths={[6, 5, 6]}>
                <TextField
                    id="secondaryApplicant"
                    label="Secondary Applicant Name"
                    placeholder="Secondary Applicant"
                    type="text"
                />

                <SelectField
                    id="relationship"
                    instruction="Select Your Relationship with Secondary Applicant"
                    instructionClassName=""
                    label="Relationship"
                    options={relationshipOptions}
                />

                <CheckboxField
                    id="debitCardSecondary"
                    label="Debit Card Required"
                    checked={false}
                />
            </FieldGroup>

            <RadioGroupField
                id="signatures"
                // instruction="Select number of Signatures"
                // instructionClassName="Select number of Signatures"
                label="Number of Signatures"
                options={[
                    { key: 'one', value: 'One' },
                    { key: 'two', value: 'Two', disabled: false, },
                ]}
            />

            <SelectField
                id="mailingAddress"
                instruction="Select your Mailing Address"
                instructionClassName="Select your Mailing Address"
                label="Mailing Address"
                options={emailOptions}
                fieldWidth="6"
            />

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
        </>

    )
}

export default AccountSetupViewContent
