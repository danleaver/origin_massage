import React, { Component } from 'react';
import { Header, Card, Button } from 'semantic-ui-react';
import ApptForm from './ApptForm';
import { ApptConsumer } from '../../providers/ApptProvider';

class Appt extends Component {


    state = { editing: false }

    toggleEdit = () => (
        this.setState({ editing: !this.state.editing })
    )

    render() { 

    
        const { id, name, length, 
            date, time, address, phone, deleteAppt, updateAppt } = this.props
                const {editing} = this.state 
                return ( 
               
                <Card.Group>

                <Card>
                    <Card.Content>
                    { editing ? <ApptForm id={id} name={name} length={length} address={address} time={time}
                    date={date} phone={phone}
                     toggleEdit={this.toggleEdit}/> :
               <>
                        <Card.Header>{name}</Card.Header>
                        <Card.Meta>{length} minutes </Card.Meta>
                        <Card.Description>  {date} start time 
                        {time} time
                        {address}
                        {phone}</Card.Description>  
                </>
    }
                    </Card.Content>
                <Card.Content>
                    <Button basic color='blue' onClick={this.toggleEdit}>
                        Edit
                    </Button>
                    <Button basic color='red' onClick={() => deleteAppt(id)} >
                        Delete
                    </Button>
                </Card.Content>
                </Card>

                </Card.Group>
            
                
            )
        
    }
        
}

const ConnectedAppt = (props) => (
    <ApptConsumer>
        { value => (
            <Appt
            {...props }
            deleteAppt={value.deleteAppt} 
            updateAppt={value.updateAppt}
            />
        )}
    </ApptConsumer>
)


export default ConnectedAppt;