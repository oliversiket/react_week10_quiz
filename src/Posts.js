import React, { Component } from "react";
import Form from "./Form";

class Posts extends Component{

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }; 
        
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        let { posts } = this.state;
        this.setState({ posts: [...posts, values]})
    }
    render() {
        let { posts } = this.state;

        return(
            <>
                <div className="jumbotron posts">
                    <h1>Posts</h1>
                </div>
                    <ul>
                        { posts.length ? posts.map((val,i) => (
                            <li
                                key = { i }
                                className="list-group-item"
                            >
                                <h2> {val.title} </h2>
                                <p> {val.text} </p>
                            </li>
                            
                        )) : <h2>There isn't any posts at the moment!</h2>
                        
                        }
                    </ul>
                <div className="formcomp">
                    <h2>Submit your post!</h2>
                    <Form 
                        onSubmit = { this.handleSubmit }
                    />
                </div>  
            </>
        )
        
    } 
}
    
export default Posts