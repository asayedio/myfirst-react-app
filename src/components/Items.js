import React, { Component } from 'react';
import './Items.css';
class Items extends Component {
    render() {
        //const {id,name,age} = this.props;
        const theItems = this.props.items;
        const items = theItems.map((item) => {
            return item.age > 10 ? (
                <div key={item.id} className="item">
                    <div className="id">{item.id}</div>
                    <div className="name">{item.name}</div>
                    <div className="age">{item.age}</div>
                </div>
            ) : null
        })
        return (
            <div>
                <div>{items}</div>
            </div>
        )
    }
}
export default Items;	