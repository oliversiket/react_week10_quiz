import React, { Component } from "react";

class Form extends Component{
    
    constructor(props){
        super(props)

        this.state = {
          title: "",
          text: ""
        }
        this.setTitle=this.setTitle.bind(this);
        this.setText=this.setText.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        
    }
    setTitle(e){
        this.setState({ title: e.currentTarget.value })
    }
    setText(e){
        this.setState({ text: e.currentTarget.value })
    }
    
    handleSubmit(e){
        let { onSubmit } = this.props
        e.preventDefault();
        onSubmit(this.state);
        this.setState({ title: "", text: "" })
    }
    render(){
        let { title, text } = this.state

        return(
            <>
                <form
                    onSubmit={ this.handleSubmit }
                    className="form-group"    
                >
                    <label>Title</label>
                    <input
                        onChange = { this.setTitle }
                        className = "form-control"
                        type = "text"
                        value = { title }
                        required
                    ></input>

                    <label>Text</label>
                    <input
                        onChange = { this.setText }
                        className="form-control"
                        type="text"
                        value = { text }
                        required
                    ></input>
                    <button type="submit" className="btn btn-success">Post</button>
                </form>
            </>
        )
    }
}
export default Form