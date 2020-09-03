import React from 'react'
import { Form, Input, Row, Col } from 'antd'

const FieldGroup = ({ widths, children }) => {
  return (
    <Row gutter={16}>
      {React.Children.map(children, (child, index) => {
        return <Col span={widths[index]}>{child}</Col>
      })}
    </Row>
  )
}

export default FieldGroup
