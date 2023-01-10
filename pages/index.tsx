// import Head from 'next/head';
import React from 'react';
import BookCard from '../ui_components/BookCard';
import { books } from '../lib/data'
const Home = () => {
    return (
        <>
            <div>
                {books.map(book => (
                    <BookCard book={book} />
                ))
                }
            </div>
        </>
    )
};
export default Home;