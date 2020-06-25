import React, { Component } from 'react';
import axios from 'axios';

const ApptContext = React.createContext();

export const ApptConsumer = ApptContext.Consumer;

class ApptProvider extends Component {

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
        return(
            <ApptContext.Provider value={{
                ...this.state, 
                addAppt: this.addAppt, 
                deleteAppt: this.deleteAppt,
                updateAppt: this.updateAppt
            }} >
                
                { this.props.children }</ApptContext.Provider>


            
        )
    }



  

}

export default ApptProvider