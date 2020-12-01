import React, { Component } from 'react';

class GatveItem extends Component {
  constructor(props){
    super(props);
    this.state = {gatve:''};

  }
  handleChange = (e)=>{
    this.setState ({gatve: e.target.value});

    console.log(e.target.value);
  };
  render() {
    return (

            <div className="col-md-4">
            <label className="col-form-label">Gatvė:</label>
              <input
                type="text"
                name= "gatve"
                defaultValue={this.state.gatve}
                onChange={this.handleChange}
                className="form-control"
                placeholder='Įrašykite gatvė..' />
            </div>
      );
  }
}

export default GatveItem;
