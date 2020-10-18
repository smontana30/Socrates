import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class SocrateForm extends React.Component {
    constructor() {
        super()
        this.state = {
            question: '',
            sheets: '',
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
        axios.post('http://127.0.0.1:5000/post', socrates, {headers: {'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS'}})
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch((error) => console.log(error))
        
    }

    render() {
        return (
            <div>
                <Form method="get" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter Question you would like Socrates to ask?</Form.Label>
                        <Form.Control name="question" onChange={this.updateQuestion} type="text" placeholder="Enter question" />
                        <Form.Text className="text-muted">
                        Type a question you would Socrates to ask.
                        </Form.Text>
                    </Form.Group>
                    <Button  variant="outline-secondary" type="submit">
                            Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default SocrateForm;