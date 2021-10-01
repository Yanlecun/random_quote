import React, {Component} from 'react'

class Order extends Component {
    render() {
        let list = this.props.data.map( (data) => {
            return (
                <li key={data.id}>
            <a href={"/content/" + data.id} onClick={this.props.onClickHandler}>{data.title}</a>
            </li>
            )
        })
        return(
            <ul>
                {list}
            </ul>
        )
    }
}

export default Order;