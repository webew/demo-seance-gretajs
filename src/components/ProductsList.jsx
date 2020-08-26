import React, { Component } from "react";
import Card from "./Card";

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        console.log(this.props.items);
        return (
            <div className="row">
                {this.props.items.map((item) => (
                    <div key={item.ref} className="col-sm-4 mb-3">
                        <Card item={item} />
                    </div>
                ))}
            </div>
        );
    }
}

export default ProductsList;
