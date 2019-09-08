import React, { Component } from 'react';

class MinimumLength extends Component{

    constructor(props){
        super(props);

        this.state = {
            input: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) { 
        this.setState( { input: e.currentTarget.value } );
    }


    render(){
        let { input } = this.state;
        let { length } = this.props;

        return(
            <div className= "jumbotron minimum mx-auto" >
                <h2>Minimum Length</h2>
                <input 
                    onChange={ this.handleChange }
                    value={ this.state.input }
                    className= {`form-control ${length > input.length ? "border-danger" : "border-success"}`} 
                >
                </input>

                { length > input.length ? <p className="help-block">Too short!</p> : null } 
        
            </div>
        );
    }
}

export default MinimumLength;