import React from 'react';
import Appt from './Appt';
import { Grid } from 'semantic-ui-react';
import { ApptConsumer } from '../../providers/ApptProvider'

const ApptList = ({ appts, deleteAppt, updateAppt }) => (
 <>

    
<Grid columns={3} divided >
<Grid.Row>
    
    { appts.map( a =>
       <Grid.Column>
       <Appt 
        key={a.id}
        {...a}
        
        deleteAppt={deleteAppt}
        updateAppt={updateAppt}
        
        />
         </Grid.Column>
      )
       
       }
       
</Grid.Row>
  </Grid>     
</>
    
)

export default ApptList;