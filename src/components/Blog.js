import React, { Component } from 'react';
import axios from 'axios';

class Blog extends Component {
    state = {
        users: []
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                this.setState({
                    users: res.data
                })
                console.log(res);
            })
    }
    render() {
        //const users = this.state.users;
        //for abbreviation
        const { users } = this.state;
        const usersList = users.map(user =>{
            return(
                <div key={user.id} className="item">
                    <div className="id">{user.id}</div>
                    <div className="name">{user.name}</div>
                    <div className="name">{user.username}</div>
                </div>
            )
        })
        return (
            <div>
                <h2>Blog</h2>
                <div>{usersList}</div>
            </div>
        )
    }
}
export default Blog;