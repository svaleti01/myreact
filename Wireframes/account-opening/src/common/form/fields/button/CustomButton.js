import React from 'react'
import { Button } from 'antd'

const CustomButton = ({
    type, 
    size, 
    icon, 
    shape, 
    disabled,
    block, 
    loading, 
    handleClick,
    style, 
    children
}) => {
  return (
    <Button 
        onClick={handleClick}
        type={type}
        size={size}
        icon={icon}
        shape={shape}
        disabled={disabled}
        block={block}
        style={style}
        loading={loading}>
        {children}
    </Button>
  )
}

export default CustomButton
