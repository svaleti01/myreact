import React, { useState } from 'react'


import SignaturePadField from '../../../common/form/fields/signature-field/SignaturePadField'
import Modal from 'antd/lib/modal/Modal'
import CustomButton from '../../../common/form/fields/button/CustomButton'


const SignatureViewContent = ({ }) => {

    const [modalVisible, setModalVisible] = useState(false)
    const toggleVisible = () => setModalVisible(!modalVisible)    
    const save = () => setSave(true) 
    const clear = () => setClear(true)
    
    
    const [saveState, setSave] = useState(false)
    const [clearState, setClear] = useState(false)
        
    return (

        <>
            <CustomButton
                style={{ margin: '20px' }}
                shape="round"
                size="default"
                type="block"
                handleClick={toggleVisible}>
                Primary Applicant Signature or Upload
            </CustomButton>
            <Modal
                title="Signature Upload"
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
                handleClick={toggleVisible}
            >Secondary Applicant Signature or Upload</CustomButton>
            <Modal
                title="Signature Upload"
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
        </>
    )

}
export default SignatureViewContent