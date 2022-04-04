import React, { useEffect } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import FourServices from './FourServices';

const Home = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("Err", err)
        });
        console.log('response',response);
        dispatch(setProducts(response.data));
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    console.log("Products: ", products);
    return (
        <div className="container my-5">
            <FourServices></FourServices>
        </div>
    );
};

export default Home;