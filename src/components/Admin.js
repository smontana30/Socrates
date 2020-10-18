import React, {Component} from 'react';
import SocrateForm from './SocrateForm';
import List from './SocratesList';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';

class Admin extends React.Component {
    constructor(){
        super();
        this.state = {
            show: false,
            sheets: []
        }
    }

    async componentDidMount() {
        let resp= []
        await axios.get('http://127.0.0.1:5000/get')
        .then(response => resp = response.data)
        .catch((err) => console.log(err));
        await resp.shift();
        await this.setState({sheets: resp});
    }

    render() {
        return (
            <div>
                <h1>What questions would you like Socrates to ask?</h1>
                <br></br>

                <Modal
                    size="lg"
                    show={this.state.show}
                    onHide={() => this.setState({show: false})}
                    aria-labelledby="modal"
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="modal">
                        Socrates Questions
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <SocrateForm />
                    </Modal.Body>
                </Modal>
                <Button variant="outline-secondary" onClick={() => this.setState({show: true})}>Submit Question</Button>
                <div></div>

                <br></br>
                <br></br>

                <h2>Questions Socrates can ask you?</h2>
                <ListGroup>
                   {this.state.sheets.map((tweet) => (
                    <ListGroup.Item>{tweet}</ListGroup.Item>
                    ))} 
                </ListGroup>
                
            </div>
        );
    }
}

export default Admin;