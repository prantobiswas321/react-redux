import React, { useEffect } from 'react';
import axios from "axios";
import { setProducts } from '../redux/actions/productActions';
import { useSelector } from 'react-redux';
import ProductSingle from './ProductSingle';
import { useDispatch } from 'react-redux';

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("Err", err)
        });
        dispatch(setProducts(response.data));
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    console.log("Products: ", products);
    return (
        <div className="container my-5">
            <ProductSingle />
        </div>
    );
};

export default ProductListing;