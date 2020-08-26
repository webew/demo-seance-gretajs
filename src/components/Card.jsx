import React, { Component } from "react";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="card">
                <img
                    src={`/assets/${this.props.item.category}/${this.props.item.image}`}
                    className="card-img-top"
                    alt={this.props.item.name}
                />
                <div className="card-body">
                    <h5 className="card-title">{this.props.item.name}</h5>
                    <p className="card-text">
                        {this.props.item.price}€ / {this.props.item.unit}
                    </p>
                </div>
            </div>
        );
    }
}

export default Card;
