import React, { Component } from 'react';

class CountBy extends Component{
    constructor(props){
        super(props);

        this.state = {
            counter: 0,
        }

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(){
        let { counter } = this.state;
        let { step } = this.props;

        this.setState({ counter: counter + step});
    }


    render(){
        let { counter } = this.state

        return(
            <div className= "jumbotron countby mx-auto">
                <h2>CountBy</h2>
                <p>{ counter }</p>
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={ this.handleClick } >Magic</button> 
            </div>
        );
    }
}


export default CountBy
