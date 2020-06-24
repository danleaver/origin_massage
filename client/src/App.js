import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import axios from 'axios';
import ApptList from './components/appts/ApptList';
import ApptForm from './components/appts/ApptForm';
class App extends Component {

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

  render() {
    const { appts } = this.state
    return (
    <>
      <Header> Origin Massage Appointments </Header>
      
     
      <ApptForm addAppt={this.addAppt}/>
       <ApptList appts={appts} />
        
      </>
 
    )
  }

}

export default App;
