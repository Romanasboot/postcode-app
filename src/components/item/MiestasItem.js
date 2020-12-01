import React, {Component} from 'react';

class MiestasItem extends Component {
    constructor(props){
        super(props);
        this.state = {miestas:'',
                    options: []
                    };
    }
    handleChange = (e) =>{
        this.setState ({miestas: e.target.value});
        console.log(e.target.value);
        
    }

    async componentDidMount(){
        let places = await fetch ("https://api.meteo.lt/v1/places")
        let miestai = await places.json()
        this.setState({options: miestai})
    }

    render() {
        const options= this.state.options.map((item, index)=>
        <option key={index} value={item.code}>{item.name}</option>)


        return(
            <div className="col-md-4">
                <label className="col-form-label">Miestas:</label>
                <select className="form-control" name="miestas" onChange={this.handleChange}>
                <option defaultValue>Pasirinkite...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                {options}
                </select>
            </div>
        );
    }
}
export default MiestasItem;

