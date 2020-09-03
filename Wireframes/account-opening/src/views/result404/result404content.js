import React from 'react';
import { Result } from 'antd';
import CustomButton from '../../common/form/fields/button/CustomButton';

const result404content = ({}) => {
  return (
    <>  
    <div>
    <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<CustomButton type="primary">Back Home</CustomButton>}
  />
    </div>
    
    </>
  )
}

export default result404content;
