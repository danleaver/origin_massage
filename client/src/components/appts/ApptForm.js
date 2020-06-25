import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { ApptConsumer } from '../../providers/ApptProvider';

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
}


class ApptForm extends Component {


    state = {errors: {length: ''}, name: '', length: '', date: '', time: '', address: '', phone: ''}

componentDidMount() {
    if (this.props.id) {
        const { name, length, date, time, address, phone } = this.props
        this.setState({ name, length, date, time, address, phone})
    }
}

handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
    let errors = this.state.errors

    switch (name) {
        case 'length': 
        errors.length = 
        value.length < 2
        ? 'time must be over 9 minutes'
        : '';
        break;
    
        default:
            break;

    }

}



handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
        this.props.updateAppt(this.props.id, this.state)
        this.props.toggleEdit()

    } else { 
    this.props.addAppt(this.state)
    }
    this.setState({name: '', length: '', date: '', time: '', address: '', phone: ''})
}

    render() {
        const { name, length, date, time, address, phone, errors } = this.state;
        return(
            //new client or edit client if statement
            <> 
            <Form onSubmit= {this.handleSubmit}>
                <Form.Input
                name='name'
                value={name}
                onChange={this.handleChange}
                
                required
                label='name'
                
            />
                 <Form.Input
                name='length'
                value={length}
                onChange={this.handleChange}
                required
                label='length'
            />
            {errors.length.length > 0 && <span>{errors.length}</span>}
                 <Form.Input
                name='date'
                value={date}
                onChange={this.handleChange}
                required
                label='date'
            />     <Form.Input
                name='time'
                value={time}
                onChange={this.handleChange}
                required
                label='time'
            />
                 <Form.Input
                name='address'
                value={address}
                onChange={this.handleChange}
                required
                label='address'
            />
                 <Form.Input
                name='phone'
                value={phone}
                onChange={this.handleChange}
                required
                label='phone'
            />
           
            <Form.Button color='red'>Submit</Form.Button>
            </Form>
            
        

            </>
        )
    }
}



const ConnectedApptForm = (props) => (
    <ApptConsumer>
        {value => (
            <ApptForm
            { ...props }
            addAppt={value.addAppt}
            updateAppt={value.updateAppt}
            />
        )}
    </ApptConsumer>
)

export default ConnectedApptForm;
