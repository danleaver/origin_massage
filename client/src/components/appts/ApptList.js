import React from 'react';
import Appt from './Appt';
import { Grid, Container } from 'semantic-ui-react';
import { ApptConsumer } from '../../providers/ApptProvider'

const ApptList = () => (
 <>

    <Container>
    
<Grid columns={3} divided >
<Grid.Row>
  <ApptConsumer>
    { value => (
      <>
                  { value.appts.map( a =>
                        <Grid.Column>
                        <Appt 
                          key={a.id}
                          {...a}
                          
                          // deleteAppt={deleteAppt}
                          //updateAppt={updateAppt}
                          
                          />
                          </Grid.Column> 
                        )
                      
                      }
            </>
                      
                      )}
  
  </ApptConsumer>
       
</Grid.Row>
  </Grid>     
                      </Container>
</>
    
)

export default ApptList;