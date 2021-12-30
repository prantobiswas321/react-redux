import React, { useEffect } from 'react';
import axios from 'axios';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(product);

    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err => {
            console.log("Err ", err);
        });
        dispatch(selectedProduct(response.data));
    }

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [productId])

    return (
        <div className="container my-5">
            {
                Object.keys(product).length === 0 ?
                    <div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                            <span class="sr-only"></span>
                        </div>
                    </div>
                    :
                    <div className="row justify-content-md-center">
                        <div className="my-auto col-12 col-lg-6">
                            <img className='img-fluid' style={{ height: "520px" }} src={image} alt="" />
                        </div>
                        <div className="my-auto col-12 col-lg-6">
                            <h1>{title}</h1>
                            <h2>
                                Price: ${price}
                            </h2>
                            <h3>{category}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
            }
        </div>
        // <div className="ui grid container">
        //     {Object.keys(product).length === 0 ? (
        //         <div>...Loading</div>
        //     ) : (
        //         <div className="ui placeholder segment">
        //             <div className="ui two column stackable center aligned grid">
        //                 <div className="ui vertical divider">AND</div>
        //                 <div className="middle aligned row">
        //                     <div className="column lp">
        //                         <img className="ui fluid image" src={image} alt='' />
        //                     </div>
        //                     <div className="column rp">
        //                         <h1>{title}</h1>
        //                         <h2>
        //                             <Link className="ui teal tag label">${price}</Link>
        //                         </h2>
        //                         <h3 className="ui brown block header">{category}</h3>
        //                         <p>{description}</p>
        //                         <div className="ui vertical animated button" tabIndex="0">
        //                             <div className="hidden content">
        //                                 <i className="shop icon"></i>
        //                             </div>
        //                             <div className="visible content">Add to Cart</div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     )}
        // </div>
    );
};

export default ProductDetail;