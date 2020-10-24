import React, { Component } from 'react';

class Items extends Component {
    render() {
        //const {id,name,age} = this.props;
        const theItems = this.props.items;
        const items = theItems.map((item) => {
            return item.age > 25 ? (
                <div key={item.id}>
                <div>{item.id}</div>
                <div>{item.name}</div>
                <div>{item.age}</div>

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