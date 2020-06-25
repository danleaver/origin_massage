import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import axios from 'axios';
import ApptList from './ApptList';
import ApptForm from './ApptForm';
import Appt from './Appt';
import { ApptConsumer } from '../../providers/ApptProvider';
class Home extends Component {

  state = { appts: [] }
  

  componentDidMount() {
    //ask rails for all todos
    axios.get("/api/appts")
      .then( res => {
        this.setState({ appts: res.data})
      })
      .catch( err => {
        console.log(err)
      })
  }


    addAppt = (appt) => {
      axios.post('/api/appts', appt )
      .then( res => {
        const { appts } = this.state
        this.setState({ appts: [...appts, res.data]})
      })
      .catch( err => {
        console.log(err)
      })
    }

    updateAppt = (id, appt) => {
      axios.patch(`/api/appts/${id}`, { appt })
      .then( res => {
        const appts = this.state.appts.map( a => {
          if ( a.id === id ) {
            return res.data
          }
          return a
        })
        this.setState({ appts })
      })
      .catch( err=> {
        console.log(err)
      })
    }

    deleteAppt = (id) => {
      axios.delete(`/api/appts/${id}`)
        .then( res => {
          const { appts } = this.state
          this.setState({ appts: appts.filter( a => a.id !== id )})
        })
        .catch(err => {
          console.log(err)

        })
    }
  render() {
    const { appts } = this.state
    return (
    
    
    <>

              <ApptConsumer>
              {value => (
                <>
                {value.test}
                </>
              )}

 </ApptConsumer>
      <Header> Origin Massage Appointments </Header>

     
      <ApptForm addAppt={this.addAppt}/>
       <ApptList appts={appts} deleteAppt={this.deleteAppt} updateAppt={this.updateAppt} />
        
      </>
 
    )
  }

}

export default Home;
