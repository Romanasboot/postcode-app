import React, { Component } from 'react';

class NamasItem extends Component {
    constructor(props){
        super(props);
        this.state = {namas: ''};

    }

 handleChange = (e) =>{
     this.setState ({namas: e.target.value});
     
     console.log(e.target.value);
 };

 
    
  render() {
    return (

            <div className="col-md-4">
            <label className="col-form-label">Namas:</label>
              <input
                type="text"
                name="namas"
                defaultValue={this.state.namas}
                onChange={this.handleChange}
                className="form-control namas"
                placeholder='Namo numeris..' />
            </div>
      );
  }
}

export default NamasItem;
