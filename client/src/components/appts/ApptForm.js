import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class ApptForm extends Component {


    state = {name: '', length: '', date: '', time: '', address: '', phone: ''}

handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
}

handleSubmit = (e) => {
    e.preventDefault()
    this.props.addAppt(this.state)
}

    render() {
        const { name } = this.state
        return(
            <> New Client
            <Form onSubmit= {this.handleSubmit}>
                <Form.Input
                name='name'
                value={name}
                onChange={this.handleChange}
                required
                label='name'
            />
            <Form.Button color='red'>Submit</Form.Button>
            </Form>
            
        

            </>
        )
    }
}

export default ApptForm;
