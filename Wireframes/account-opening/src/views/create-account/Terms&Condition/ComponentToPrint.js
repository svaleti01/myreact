import React, { useState, useContext } from 'react'
import { Modal, Button } from 'antd'
import ReactToPrint from 'react-to-print'
import View from '../../../common/view/View'
import Content from './ComponentToPrintContent'
import PrintPDF from './PrintPDF'
import { PDFDownloadLink } from '@react-pdf/renderer'
import PDFDownloadContent from './PDFDownloadContent'
import CheckboxField from '../../../common/form/fields/checkbox-field/CheckboxField'
import CustomButton from '../../../common/form/fields/button/CustomButton'

import { StepContext } from '../CreateAccountViewContent'

const stepKey = 'termsAndConditions'

const ComponentToPrint = ({}) => {
  const stepContextValues = useContext(StepContext);
  const { goToPreviousStep, goToNextStep } = stepContextValues;
  
  const [checked, setChecked] = useState(false)
  const onChange = () => setChecked(!checked)

  const [modalVisible, setModalVisible] = useState(false)
  const toggleVisible = () => setModalVisible(!modalVisible)
  const handleCancel = () => setModalVisible(false)

  
  const content = (
    <div>
    <div>
      <CheckboxField
        id="termsAndCondition"
        checked={checked}
        checkboxLabel={
          <a href="#" onClick={() => setModalVisible(true)}>
            Please accept the Terms & Conditions Before Proceding !!!!
          </a>
        }
        instruction=""
        label=""
        onChange={onChange}
      />
    </div>
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
    <div id="my-modal">
      <Modal
        title="Terms & Conditions"
        visible={modalVisible}
        onOk={toggleVisible}
        onCancel={toggleVisible}
        width={'70vw'}
        footer={[
          <CustomButton handleClick={toggleVisible} Close>Close</CustomButton>,
          <CustomButton label="Print This!" type="primary">
            <PrintPDF />
          </CustomButton>,
          <CustomButton type="primary">
            <PDFDownloadLink
              document={<PDFDownloadContent />}
              fileName="Terms&Conditions.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? 'Loading document...' : 'Download'
              }
            </PDFDownloadLink>
          </CustomButton>,
        ]}
      >
        <div className="modalcontent">
          <div className="modalbody">
            <div
              style={{ overflowY: 'scroll', height: '50vh', padding: '10px' }}
            >
              <Content />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  </div>
  )

  return (
    <View header="Terms & Conditions" content={content} />
  )
}

export default ComponentToPrint
