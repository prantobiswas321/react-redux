import React from 'react';
import { useSelector } from 'react-redux';
import ShowFourPoduct from './ShowFourPoduct';

const FourServices = () => {
    const products = useSelector((state) => state.allProducts.products);
    console.log('productsIn4',products);
    const size = 4;
    const result = products.slice(0, size);
    console.log('resultIn4',result);
    return (
        <div>
            {
                result.length === 0 ? <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only"></span>
                    </div>
                </div>
                    :
                    <div>
                        <div className="mb-5">
                            <h1>Feature Products</h1>
                        </div>
                        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
                            {
                                result.map((product, key) => <ShowFourPoduct
                                    key={key}
                                    product={product}
                                ></ShowFourPoduct>)
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default FourServices;