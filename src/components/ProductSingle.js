import React from 'react';
import { useSelector } from 'react-redux';
import Products from './Products';

const ProductSingle = () => {
    const products = useSelector((state) => state.allProducts.products);
    // const renderList = products.map((product) => {
    //     const { id, title, image, price, category } = product;
    //     return (
    //         <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3" key={id}>
    //             {/* <Link to={`/product/${id}`}> */}
    //             <div className="col">
    //                 <div className="card h-100">
    //                     <img src={image} className="card-img-top" alt={title} />
    //                     <div className="card-body">
    //                         <h5 className="card-title">{title}</h5>
    //                         <h4>$ {price}</h4>
    //                         <h4>{category}</h4>
    //                     </div>
    //                 </div>
    //             </div>
    //             {/* </Link> */}
    //         </div>
    //     );
    // });
    return (
        // <>{renderList}</>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
            {
                products.map(product => <Products
                    key={product.id}
                    product={product}
                ></Products>)
            }
        </div>
    );
};

// eslint-disable-next-line no-lone-blocks
{/* <div className="four wide column" key={id}>
    <Link to={`/product/${id}`}>
        <div className="ui link cards">
            <div className="card">
                <div className="ui fluid image">
                    <img src={image} alt={title} />
                </div>
                <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta price">$ {price}</div>
                    <div className="meta">{category}</div>
                </div>
            </div>
        </div>
    </Link>
</div> */}

export default ProductSingle;