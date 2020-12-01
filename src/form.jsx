import { Component} from 'react';
import {Button, Container} from 'react-bootstrap';


class Form extends Component {
    constructor (props){
        super (props);
        this.state = {value:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value:event.target.value});
    }
    handleSubmit(event){
        console.log('Vardas: '+ this.state.value);
        event.preventDefault();
    }

    render() {
        return (
                <Container>
                <h2>cia forma</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Vardas:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <Button>

                    <input type="submit" value="Submitas" ></input>
                    </Button>
                </form>
                <div><h3>Your input:</h3></div>
                <div>{this.state.value}</div>
                </Container>
        )
    }
}
export default Form;