import React, { Component } from 'react';
import axios from 'axios';

class Blog extends Component {
    state = {
        users:[]
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then( res => {
            this.setState({
                users : res.data
            })
            console.log(res);
        })
    }
    render(){
        return(
            <div>
                <h2>Blog</h2>
        <div>{this.state.users.map( user => <div>Name is: {user.name} and username is : {user.username}</div>)}</div>
            </div>
        )
    }
}
export default Blog;