import React from 'react'

import styles from './LinkText.modules.css'

const LinkText = ({ text, onClick }) => {
  return (
    <a
      role="button"
      href="javascript:void(0)"
      className={styles.linkText}
      onClick={onClick}
      style={{ color: 'rgb(240, 117, 36)' }}
    >
      {text}
    </a>
  )
}

export default LinkText
