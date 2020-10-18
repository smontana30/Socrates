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
            sheets: ''
        }
    }

    // async componentDidMount() {
    //     let resp= ''
    //     axios.get('http://127.0.0.1:5000/get')
    //     .then(response => this.setState({ sheets: response.data }))
    //     .catch((err) => console.log(err));
    //     console.log(this.state.sheets);

    //     fetch('http://127.0.0.1:5000/post')
    //     .then(res => resp = res)
    //     .catch((err) => console.log(err));

    //     console.log("sooooo");
    //     console.log(resp);
    //     this.setState({sheets: resp})
    // }

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