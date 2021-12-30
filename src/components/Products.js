import React from 'react';
import { Link } from 'react-router-dom';

const Products = (props) => {
    const { id, title, image, price, category } = props.product;
    return (

        <div className="col">
            <div className="card h-100">
                <img src={image} className="mx-auto my-3 card-img-top" style={{ width: "220px", height: "320px" }} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h4>$ {price}</h4>
                    <h4>{category}</h4>
                </div>
                <Link to={`/product/${id}`}>
                    <button className="my-3 btn btn-success">View Details</button>
                </Link>
            </div>
        </div >

    );
};

export default Products;