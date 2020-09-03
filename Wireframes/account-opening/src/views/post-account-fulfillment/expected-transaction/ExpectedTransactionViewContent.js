import React from 'react'
import CheckboxField from '../../../common/form/fields/checkbox-field/CheckboxField'
import FieldGroup from '../../../common/form/fields/field-group/FieldGroup'
import TextField from '../../../common/form/fields/text-field/TextField'
import CustomButton from '../../../common/form/fields/button/CustomButton'





const ExpectedTransactionViewContent = ({ }) => {


    return (
        <>

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
export default ExpectedTransactionViewContent