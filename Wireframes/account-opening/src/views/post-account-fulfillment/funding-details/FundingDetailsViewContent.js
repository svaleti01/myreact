import React from 'react'
import FieldGroup from '../../../common/form/fields/field-group/FieldGroup'
import TextField from '../../../common/form/fields/text-field/TextField'
import SelectField from '../../../common/form/fields/select-field/SelectField'
import RadioGroupField from '../../../common/form/fields/radio-group-field/RadioGroupField'
import CustomButton from '../../../common/form/fields/button/CustomButton'

const FundingDetailsViewContent = ({ }) => {

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

    return (
        <>

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

            <CustomButton
                label="previous"
                shape="round"
                size="default"
                type="block"
            >Next</CustomButton>

            <CustomButton
                style={{ margin: '20px' }}
                label="next"
                shape="round"
                size="default"
                type="block"
            >Previous</CustomButton>



        </>
    )

}
export default FundingDetailsViewContent