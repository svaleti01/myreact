import React from 'react'

import { useToggle } from '../../../common/hooks/useToggle'
import View from '../../../common/view/View'
import Content from './ToggleViewContent'

const ToggleView = () => {
  const [isOpen, toggle] = useToggle(false)

  return <View header="Toggle View Header" content={<Content />} />
}

export default ToggleView
