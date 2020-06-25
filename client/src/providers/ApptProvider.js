import React, { Component } from 'react';
import axios from 'axios';

const ApptContext = React.createContext();

export const ApptConsumer = ApptContext.Consumer;

class ApptProvider extends Component {


    state = { title: "hello", test: 'testing' }
    render() {
        return(
            <ApptContext.Provider value={this.state} >{ this.props.children }</ApptContext.Provider>


            
        )
    }
}

export default ApptProvider