import React from 'react';
import ReactToPrint from 'react-to-print';
import ComponentToPrintContent from './ComponentToPrintContent'

 

class PrintPDF extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            return <a style={{ color: "white" }} href="#">Print this out</a>;
          }}
          content={() => this.componentRef}
        />
        <div style={{ display: "none" }}><ComponentToPrintContent ref={el => (this.componentRef = el)} /></div>
      </div>
    );
  }
}

export default PrintPDF