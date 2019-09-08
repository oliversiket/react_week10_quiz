import React, { Component } from "react";

class EvenClicks extends Component{
    constructor(props){

        super(props);

        this.state = {
            counter: 0,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { counter } = this.state;
        
        this.setState( { counter: counter + 1 })
        
       }

    render(){
        let { msg, counter } = this.state;

        return(
            <>
                <div className="jumbotron clickme mx-auto">
                    <h2>EvenClicks</h2>
                    <button 
                        type="button" 
                        className="btn btn-info"
                        onClick= { this.handleClick } > { counter % 2 === 0 ? "Even" : "Odd" } </button>
                    <p>Click Counter: { counter }</p>
                </div>
            </>
        );
    }

}
export default EvenClicks