import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class DishDetail extends Component {

    renderComment(comt) {
        if (comt != null) {
            const comment = comt.map((dish) => {
                return (
                    <ul className="list-unstyled">
                        <li className="mb-3">{dish.comment}</li>
                        <li>--{dish.author},{dish.date}</li>
                    </ul>
                );
            });
            return comment;
        } else {
            return <div></div>;
        }

    }
    render() {



        return (
            <div className="row">
                <div className="col-12 col-md-5">
                    <Card>
                        <CardImg src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md ml-2">
                    <h4>Comments</h4>
                    {this.renderComment(this.props.dish.comments)}
                </div>
            </div>


        );
    }
}

export default DishDetail;