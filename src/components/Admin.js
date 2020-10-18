import React, {Component} from 'react';
import SocrateForm from './SocrateForm';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class Admin extends React.Component {
    constructor(){
        super();
        this.state = {
            show: false,
        }
    }


    render() {
        return (
            <div>
                <h1>What Question would you like Socrates to ask?</h1>
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

                <h2>Questions Socrates can ask you?</h2>
                <div></div>
            </div>
        );
    }
}

export default Admin;