import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// ========================================
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.state = {"inputText" : "Browse"}

  }

  handleUpload  ()  {
          //create Reader
          const reader = new FileReader();
          const file = document.getElementById('file2').files[0];

          reader.onload = ((theFile) => {
              return (e) => {
                  const content = e.target.result;
                  console.log(btoa(content));
              };

          })(file);

          reader.readAsBinaryString(file);
  }

  handleFileSelect(e) {
    const file = e.target.value;
    this.setState({"inputText": file});
  }

  render () {
    const { handleFileSelect, handleUpload } = this;
    const inpStyle = {"display" : "none"};
    const { inputText } = this.state;
    return (
      <div className="row">
        <div className="col-md-2 col-md-offset-5">
          <label className="btn btn-default btn-file">
            {inputText}<input type="file" id="file2" onChange={handleFileSelect} style={inpStyle}/>
          </label>
          <button onClick={handleUpload}>Upload</button>
        </div>
      </div>
    );
  };
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
