import React from 'react';
import Appt from './Appt';
import { Grid } from 'semantic-ui-react'

const ApptList = ({ appts }) => (
 
    
<Grid columns={3} divided >
<Grid.Row>
    
    { appts.map( a =>
       <Grid.Column>
       <Appt 
        key={a.id}
        {...a}/>
         </Grid.Column>
      )
       
       }
       
</Grid.Row>
  </Grid>     

    
)

export default ApptList;