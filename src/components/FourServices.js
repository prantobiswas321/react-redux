import React from 'react';
import { useSelector } from 'react-redux';
import ShowFourPoduct from './ShowFourPoduct';

const FourServices = () => {
    const products = useSelector((state) => state.allProducts.products);
    console.log(products);
    const size = 4;
    const result = products.slice(0, size);
    console.log(result);
    return (
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
            {
                result.map((product, key) => <ShowFourPoduct
                    key={key}
                    product={product}
                ></ShowFourPoduct>)
            }
        </div>
    );
};

export default FourServices;