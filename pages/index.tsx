import React from 'react';
import BookCard from '../ui_components/BookCard';
import { books } from '../lib/data';
import SearchForm from '../ui_components/SearchForm';
import Head from 'next/head';

const Home = () => {
    return (
        <>
            <Head>
                <title>E-library</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-4 text-center">Welcome to the e-library!</h1>
                <SearchForm />

                <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4">
                    <div>
                        {books.map(book => (
                            <BookCard key={book.id} book={book} />
                        ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
};
export default Home;