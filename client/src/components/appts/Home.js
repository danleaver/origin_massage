import React, { Component } from 'react';
import { Header, Grid } from 'semantic-ui-react';
import axios from 'axios';
import ApptList from './ApptList';
import ApptForm from './ApptForm';

class Home extends Component {

  


  render() {
    
    return (
    
    
    <>
    <ApptList />

      <ApptForm />

     
      
       
        
      </>
 
    )
  }

}

export default Home;
