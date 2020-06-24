import React from 'react';
import { Header, Card, Button } from 'semantic-ui-react';

const Appt = ({ id, name, length, 
    date, time, address, phone}) => (
        
            <Card.Group>
            <Card>
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Meta>{length} minutes </Card.Meta>
                    <Card.Description>  {date} start time 
                    {time} time
                    {address}
                    {phone}</Card.Description>  
                </Card.Content>
            <Card.Content>
                <Button basic color='blue'>
                    Edit
                </Button>
                <Button basic color='red'>
                    Delete
                </Button>
            </Card.Content>
            </Card>
            </Card.Group>
        
    )

export default Appt;