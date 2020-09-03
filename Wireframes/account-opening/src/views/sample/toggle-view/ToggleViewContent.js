import React from 'react'

import { useToggle } from '../../../common/hooks/useToggle'
import CheckboxField from '../../../common/form/fields/checkbox-field/CheckboxField'
import FormSection from './ToggleViewFormSection'

const ToggleViewContent = () => {
  const [isOpen, toggle] = useToggle(true)

  return (
    <>
      <CheckboxField
        id="toggleFormSection"
        checkboxLabel="Click on this box to toggle the form beneath"
        checked={isOpen}
        onChange={toggle}
      />
      {isOpen && <FormSection />}
    </>
  )
}

export default ToggleViewContent
