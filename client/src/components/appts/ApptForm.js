import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { ApptConsumer } from '../../providers/ApptProvider';

class ApptForm extends Component {


    state = {name: '', length: '', date: '', time: '', address: '', phone: ''}

componentDidMount() {
    if (this.props.id) {
        const { name, length, date, time, address, phone } = this.props
        this.setState({ name, length, date, time, address, phone})
    }
}

handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
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
        const { name, length, date, time, address, phone } = this.state
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
            />
        )}
    </ApptConsumer>
)

export default ConnectedApptForm;
