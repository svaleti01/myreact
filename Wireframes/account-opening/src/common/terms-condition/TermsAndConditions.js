import React, { useState } from 'react'
import CheckboxField from '../form/fields/checkbox-field/CheckboxField'
import { Checkbox } from 'antd'
import LinkText from '../link-text/LinkText'
import Modal from 'antd/lib/modal/Modal'
import PrintPDF from '../../views/create-account/Terms&Condition/PrintPDF'
import CustomButton from '../form/fields/button/CustomButton'
import { PDFDownloadLink } from '@react-pdf/renderer'
import PrivacyPDFDownloadContent from './PrivacyStatement'

const TermsAndConditions = ({
    id,
    options,
}) => {

    const [modalVisible, setModalVisible] = useState(false)
    const [modalVisibleprivacy, setModalVisiblePrivacy] = useState(false)
    const toggleVisibleBankingTerms = () => setModalVisible(!modalVisible)
    const toggleVisiblePrivacy = () => setModalVisiblePrivacy(!modalVisibleprivacy)
    const [isLoadingState, setIsLoadingState] = useState({
        isLoading: false
    })

    return (
        <>
            <Checkbox />
            <span> Review with customer </span>

            <LinkText text={options[0]} onClick={toggleVisibleBankingTerms} />
            <Modal
                title="Online Banking Enrollment"
                visible={modalVisible}
                onOk={toggleVisibleBankingTerms}
                onCancel={toggleVisibleBankingTerms}
                width={'70vw'}
                footer={[
                    <CustomButton handleClick={toggleVisibleBankingTerms} Close>Close</CustomButton>,
                    <CustomButton label="Print This!" type="primary"
                        handleClick={toggleVisibleBankingTerms}>
                        <PrintPDF />
                    </CustomButton>,
                    <CustomButton type="primary" handleClick={toggleVisibleBankingTerms}>
                        <PDFDownloadLink
                            document={<PrivacyPDFDownloadContent />}
                            fileName="OnlineBankingTermsandConditions.pdf"
                        >
                            {({ blob, url, loading, error }) =>
                                loading ? 'Loading document...' : 'Download'
                            }
                        </PDFDownloadLink>
                    </CustomButton>
                ]}
            >
                <div
                    style={{ overflowY: 'scroll', height: '50vh', padding: '10px' }}
                >
                    <PrivacyPDFDownloadContent />
                </div>                
            </Modal>


            <span> and </span>

            <LinkText text={options[1]} onClick={toggleVisiblePrivacy} />
            <Modal
                title="Privacy Statement"
                visible={modalVisibleprivacy}
                onOk={toggleVisiblePrivacy}
                onCancel={toggleVisiblePrivacy}
                width={'70vw'}
                footer={[
                    <CustomButton handleClick={toggleVisiblePrivacy} Close>Close</CustomButton>,
                    <CustomButton label="Print This!" type="primary" handleClick={toggleVisiblePrivacy}>
                        <PrintPDF />
                    </CustomButton>,
                    <CustomButton type="primary" handleClick={toggleVisiblePrivacy}>
                        <PDFDownloadLink
                            document={<PrivacyPDFDownloadContent />}
                            fileName="PrivacyStatement.pdf"
                        >
                            {({ blob, url, loading, error }) =>
                                loading ? 'Loading document...' : 'Download'
                            }
                        </PDFDownloadLink>
                    </CustomButton>
                ]}
            >
                <div
                    style={{ overflowY: 'scroll', height: '50vh', padding: '10px' }}
                >
                    <PrivacyPDFDownloadContent />
                </div>
            </Modal>
        </>
    )
}

export default TermsAndConditions