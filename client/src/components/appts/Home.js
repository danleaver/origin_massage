import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import axios from 'axios';
import ApptList from './ApptList';
import ApptForm from './ApptForm';
import Appt from './Appt';
import { ApptConsumer } from '../../providers/ApptProvider';
class Home extends Component {

  


  render() {
    
    return (
    
    
    <>

      <Header> Origin Massage Appointments </Header>

     
      <ApptForm />
       <ApptList />
        
      </>
 
    )
  }

}

export default Home;
