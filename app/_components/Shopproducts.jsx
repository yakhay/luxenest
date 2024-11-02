'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Updated import for app directory
import Product from './Product';
import Link from 'next/link';

function Shopproducts() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(''); // State for search term
    const limit = 8;

    // Fetch products
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/data/products.json');
            const data = await response.json();
            console.log("Fetched data:", data);
            setProducts(data);
        };
        fetchData();
    }, []);

    const totalItems = products.length;
    const totalPages = Math.ceil(totalItems / limit);
    const startIndex = (currentPage - 1) * limit;

    // Filter products based on the search term
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Get items for the current page
    const items = filteredProducts.slice(startIndex, startIndex + limit);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[48px] mt-[40px] text-[#B88E2F]'>Shop Products</h1>
            <div className='w-[80%]'>
                <input
                    type="text"
                    placeholder="Search ..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // Update search term on change
                    className="mb-4 p-2 border-b outline-none border-gray-300 rounded"
                />
            </div>
            <div className='grid lg:grid-cols-4 lg:gap-20 md:grid-cols-2 md:gap-4 grid-col-1 gab-4'>
                {items.map((product) => (
                    <Link key={product.id} href={`/product-details/${product.id}`}><Product key={product.id} product={product} /> </Link>
                ))}
            </div>
            <div className='mt-[20px]'>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button className='border-2 border-[#B88E2F] rounded-[5px] w-[40px] h-[40px] hover:bg-[#B88E2F] hover:text-white'
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        style={{
                            margin: '0 5px',
                            fontWeight: currentPage === index + 1 ? 'bold' : 'normal',
                        }}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Shopproducts;
