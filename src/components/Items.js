import React ,{Component} from 'react';

class Items extends React.Component{
    render(){
        //const {id,name,age} = this.props;
        const theItems = this.props.items;
        const items = theItems.map( (item) =>{
            return(
                <div>
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                    <p>{item.age}</p>
                </div>
            )
        })
        return(
            <div>
                <p>{items}</p>
            </div>
        )
    }
}
export default Items;