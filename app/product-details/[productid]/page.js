"use client";
import Details from './_components/Details';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // Use the appropriate hook for params
import Product from '../../_components/Product';
import FooterContact from '../../_components/FooterContact';
import Link from 'next/link';

export default function ProductDetails() {
    const { productid } = useParams(); // Unwrap params using useParams
    const [products, setProducts] = useState([]);
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/data/products.json');
            const data = await response.json();
            console.log("Fetched data:", data);
            setProducts(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log('Products:', products);
        console.log('Product ID:', productid);

        if (products.length > 0 && productid) {
            // Convert productid to a number for comparison
            const product = products.find((p) => p.id === Number(productid));
            console.log('Found Product:', product); // Log found product
            setProductDetails(product);
        }
    }, [products, productid]);
    console.log("Product Detailssss:", productDetails);

    return (
        <div >
            
            {productDetails ? (

                <Details productDetails={productDetails} /> // Pass product details to Details component
            ) : (
                <p>Loading product details...</p>
            )}
            <div className='flex justify-center items-center mt-[60px] w-[100%]'>
            <div className='grid grid-cols-1 gap-11 lg:grid-cols-4 lg:gap-10 md:grid-cols-2 md:gap-12 mt-[40px] '>

                {products.map((product) => (
                product.id < 9 ?  <Link key={product.id} href={`/product-details/${product.id}`}><Product key={product.id} product={product} /> </Link> : null
            ))}
            </div>
            </div>
            <FooterContact />
        </div>
    );
}
