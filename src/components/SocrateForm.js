import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class SocrateForm extends React.Component {
    constructor() {
        super()
        this.state = {
            question: ''
        }
    }

    updateQuestion = (e) => {
        this.setState({question: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const socrates = {
            question: this.state.question
        };


        // axios.request.append('Access-Control-Allow-Origin', 'http://localhost:3000');

        axios.post('http://127.0.0.1:5000/post', {socrates})
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(() => console.log("Can’t access response. Blocked by browser?"))
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter Question you would like Socrates to ask?</Form.Label>
                        <Form.Control onChange={this.updateQuestion} type="text" placeholder="Enter question" />
                        <Form.Text className="text-muted">
                        Type a question you would Socrates to ask.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="outline-secondary" type="submit">
                            Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default SocrateForm;