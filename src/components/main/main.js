import {Component} from 'react';
import './main.css';
import MiestasItem from '../item/MiestasItem';
import GatveItem from '../item/GatveItem';
import NamasItem from '../item/NamasItem';
import {Container, Form, Row} from 'react-bootstrap';


class Main extends Component {
    constructor(){
        super()
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    handleClear = (e) => {console.log('kazkas paspuade RESET')}

      
    onFormSubmit = (e) => {
        // const {value, setValue} = useState();
        // onInput = ({target:{value}}) => setValue(value);
        
        let search ={miestas: MiestasItem.value,
                    street: GatveItem.value,
                    namas: NamasItem.value}
        e.preventDefault();
        console.log(search);
        };

    onInput = (e)=>{
        e.preventDefault();
        console.log('on Input');
    };

    
    render () {
        return(
            <Container fluid="md">
                <Form onSubmit={this.onFormSubmit}>
                    <Row>
                        <MiestasItem />
                        <GatveItem value={this.props.gatve} readonly="true" />
                        <NamasItem value={this.props.namas} readonly="true" />
                    </Row>
                    <div className="row justify-content-center buttons">
                        <button type="submit" className="btn btn-primary" onClick={this.onFormSubmit}>Ieškoti</button>
                        <button type="submit" className="btn btn-outline-secondary" onClick={this.handleClear}>Valyti</button>
                        {/* <Button variant="primary">Primary</Button>{' '}
                        <Button variant="outline-secondary">Secondary</Button>{' '} */}

                    </div>
                </Form>
            </Container>
        )
    }
}
export default Main;
