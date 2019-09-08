import React, { Component } from 'react';

class HideMe extends Component{
    constructor(props){
        super(props);

        this.state = {
           clicked: false,
        }

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(){
        this.setState({ clicked: true});
    }


    render(){
        let { clicked } = this.state

        return(
            <div className= "jumbotron hideme mx-auto">
                <h2>Hide Me!</h2>
                <p></p>
                <button 
                    style={
                        { visibility: clicked ? "hidden" : "visible" }
                    }
                    type="button" 
                    className="btn btn-dark"
                    onClick={ this.handleClick } >{ this.props.children }</button> 
            </div>
        );
    }
}


export default HideMe
