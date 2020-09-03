import React from 'react'
import { useToggle } from '../../../common/hooks/useToggle'

import CustomButton from '../../../common/form/fields/button/CustomButton'
import TextField from '../../../common/form/fields/text-field/TextField'
import CheckboxField from '../../../common/form/fields/checkbox-field/CheckboxField'
import FieldGroup from '../../../common/form/fields/field-group/FieldGroup'
import LinkText from '../../../common/link-text/LinkText'
import TermsAndConditions from '../../../common/terms-condition/TermsAndConditions'



const AccountEnrollmentFulfillmentViewContent = ({ }) => {

    const [isOpen, toggle] = useToggle(false)


    return (
        <>

            <h2>Online Banking is your branch always open</h2>

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
export default AccountEnrollmentFulfillmentViewContent