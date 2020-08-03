import React from 'react';
import './App.css';
import Pdf from "react-to-pdf";

const ref = React.createRef();
const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [4,2]
};

function App() {
  return (
    <div className="App">
      <Pdf
        targetRef={ref}
        filename="code-example.pdf"
        // options={options}
      >
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </div>
  );
}

export default App;
