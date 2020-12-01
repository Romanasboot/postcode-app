import {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Form, Row, Col, Button, FormGroup, FormLabel, FormControl} from 'react-bootstrap';


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
    
    render () {
        return(
            <Container fluid="md">
                <Form>
                    <Row>
                        <Col md>
                            <FormGroup controlId="formGatve">
                                <FormLabel>Miestas:</FormLabel>
                                <FormControl type="text" placeholder="Miestas.."></FormControl>
                            </FormGroup>

                        </Col>
                        <Col md>
                            <FormGroup controlId="formGatve">
                                <FormLabel>Gatve:</FormLabel>
                                <FormControl type="text" placeholder="Gatve.."></FormControl>
                            </FormGroup>

                        </Col>
                        <Col md>
                            <FormGroup controlId="formNumber">
                                <FormLabel>Namas:</FormLabel>
                                <FormControl type="text" placeholder="Namo numeris.."></FormControl>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
                    
                    <div className="row justify-content-center">
                        <button type="submit" className="btn btn-primary" onClick={this.onSearch}>Ieškoti</button>
                        <button type="submit" className="btn btn-outline-secondary" onClick={this.onClear}>Valyti</button>
                        <Button variant="outline-primary">Primary</Button>{' '}
                        <Button variant="outline-secondary">Secondary</Button>{' '}

                    </div>
                    
                    
                    <div>

                    </div>
                         

                    {/* <div className="card">
                        <div className="card-body">
                            <AddressItem label="Street" value={this.props.street} placeholder="" readonly="true" />
                            <AddressItem label="City" value={this.props.city} placeholder="" readonly="true" />
                            <AddressItem label="State" value={this.props.state} placeholder="" readonly="true" />
                            <AddressItem label="Postal Code" value={this.props.code} placeholder="" readonly="true" />
                            <AddressItem label="Country" value={this.props.country} placeholder="" readonly="true" />
                            </div>
                    </div> */}
 


                </Container>

        )
        
    }
}
export default Main;
